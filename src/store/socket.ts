import { create } from 'zustand';
import { Socket, io } from 'socket.io-client';
import type { ChatState } from './chat';

interface SocketState {
  accessToken: string | null;
  socket?:Socket<ServerToClientEvents, ClientToServerEvents>;
  chatStore?: ChatState;
  processingmessageTime: Array<number>;
  connect: (accessToken: string) => void;
  sendMessage: (characterId: number, characterName:string, message:string) => void;
  setChatStore: (chatSate:ChatState) => void;
}

export interface Chat {
  fromUser: boolean;
  content: string;
}

export interface MessageFromClient {
  content: string;
  characterId: number;
  createdAt: number;
  characterName: string;
}

export interface MessageToClient extends Chat {
  messageId: string;
  characterId: number;
  createdAt: number;
  characterName: string;
  /**
   * Chat 내용
   * conent: string,
   * fromUser: boolean,
   */
}

export interface ErrorToClient {
  content: string;
}

interface ServerToClientEvents {
  subscribe: (message: MessageToClient) => void;
  error: (message: ErrorToClient) => void;
}

interface ClientToServerEvents {
  publish: (message: MessageFromClient) => void;
}

const useSocketStore = create<SocketState>((set, get) => ({
  processingmessageTime: [],
  chatInfo: null,
  accessToken: null,
  connect: (accessToken) => {
    if (!get().accessToken) {
      set({ accessToken });
    }

    if (!get().socket) {
      set(() => ({
        socket: io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3000/', {
          path: '/ws',
          auth: {
            token: accessToken,
          },
        }),
      }));

      get().socket!.on('connect', async () => {
        get().socket!.on('subscribe', (msg) => {
          const characterId = getCurrentCharacterId();
          if (characterId === null || msg.characterId !== characterId) return;
          if (msg.fromUser) {
            get().chatStore?.addChatContents({
              speaker: 'me', content: msg.content, timestamp: msg.createdAt, loading: false,
            });
            const tempTimestamp = msg.createdAt + 1;
            const characterName = get().chatStore?.chatInfo?.characterName;
            get().chatStore?.addChatContents({
              speaker: characterName || '', content: '', timestamp: tempTimestamp, loading: true,
            });
            get().processingmessageTime.push(tempTimestamp);
          } else {
            const prevTime = get().processingmessageTime.shift();
            if (prevTime) {
              get().chatStore?.loadedChat(prevTime, msg.content, msg.createdAt);
            }
          }
        });

        get().socket!.on('error', (msg) => {
          console.error(`Error: ${msg.content}`);
        });
      });
    }
  },
  sendMessage: (characterId, characterName, message) => {
    if (message && get().socket?.connected) {
      try {
        get().socket?.emit('publish', {
          content: message,
          characterName,
          characterId,
          createdAt: new Date().getTime(),
        });
      } catch (err) {
        console.error(err);
      }
    } else if (!get().socket?.connected) {
      const accessToekn = get().accessToken;
      if (accessToekn) get().connect(accessToekn);
    }
  },
  setChatStore: (chatState:ChatState) => {
    set((state) => ({
      chatStore: state.chatStore ? state.chatStore : chatState,
    }));
  },
}));

function getCurrentCharacterId() {
  const pathMatcher = window.location.pathname.match(/\/chats\/([\d]+)$/);
  if (pathMatcher && pathMatcher.length === 2) {
    try {
      return Number(pathMatcher[1]);
    } catch (error) {
      return null;
    }
  }
  return null;
}

export default useSocketStore;
