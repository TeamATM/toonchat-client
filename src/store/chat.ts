import { create } from 'zustand';

interface ChatContentsState {
  id: number, speaker: string, content: string, timestamp: number, loading: boolean,
}

interface NewChatContentState {
  speaker: string, content: string, timestamp: number, loading: boolean,
}

export interface ChatState {
  chatContents: ChatContentsState[],
  chatInfo: { characterName: string, characterId: number } | null;
  setChatInfo: (characterName: string, characterId: number) => void;
  clearChatContents: () => void;
  initChatContents: (history: ChatContentsState[]) => void;
  addChatContents: (newChat: NewChatContentState) => number;
  loadedChat: (loadedIndex: number, message: string, timestamp: number) => void;
  sortingChat: () => void;
}

const useChatStore = create<ChatState>((set, get) => ({
  chatContents: [],
  chatInfo: null,
  setChatInfo: (characterName: string, characterId: number) => set(() => ({
    chatInfo: { characterId, characterName },
  })),
  clearChatContents: () => set(() => ({
    chatContents: [],
  })),
  initChatContents: (history) => set(() => ({
    chatContents: [...history],
  })),
  addChatContents: (newChat) => {
    set(
      (state) => ({
        chatContents: [...state.chatContents, { ...newChat, id: state.chatContents.length + 1 }],
      }),
    );
    get().sortingChat();
    return newChat.timestamp;
  },
  loadedChat: (loadingTimestamp, message, timestamp) => set(
    (state) => ({
      chatContents: state.chatContents.map((chatContent) => {
        if (chatContent.timestamp === loadingTimestamp) {
          return {
            ...chatContent, loading: false, content: message, timestamp,
          };
        }
        get().sortingChat();
        return chatContent;
      }),
    }),
  ),
  sortingChat: () => set(
    (state) => ({
      chatContents: state.chatContents.sort(
        (a, b) => a.timestamp - b.timestamp,
      ),
    }),
  ),
}));

export default useChatStore;
