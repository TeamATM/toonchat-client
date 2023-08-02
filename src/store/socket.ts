import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { create } from 'zustand';
import type { ChatState } from './chat';

interface SocketState {
    stompClient?: Client;
    chatStore?: ChatState;
    processingMessagePool: Map<string, [number, string]>;
    connect: () => void;
    onConnectSuccess: () => void;
    onMessageRecived: (paylod:any) => void;
    sendMessage: (message:string) => void;
    setChatStore: (chatSate:ChatState) => void;
}

const useSocketStore = create<SocketState>((set, get) => ({
  processingMessagePool: new Map<string, [number, string]>(),
  connect: () => {
    if (!get().stompClient) {
      set(() => ({
        stompClient: new Client({
          webSocketFactory: () => new SockJS(process.env.SOCKET_URL || 'http://localhost:8080/ws'),
          onConnect: get().onConnectSuccess,
          debug: () => undefined,
          // connectHeaders: {},
          // reconnectDelay: 1000,
          // heartbeatIncoming: 4000,
          // heartbeatOutgoing: 4000
        }),
      }));
    }
    if (get().stompClient!.connected) return;
        /**
         * TODO: 로그인 이후 인증 정보 같이 담아서 보내기
         */
        get().stompClient!.activate();
  },
  onConnectSuccess: () => {
    console.log('WebSocket Connected');
    get().stompClient!.subscribe('/topic/chat', get().onMessageRecived);
  },
  onMessageRecived: (paylod:any) => {
    console.log(typeof paylod, paylod);
    const message:MessageObject = JSON.parse(paylod.body) as MessageObject;
    message.createdAt = new Date(message.createdAt);

    console.log(message);
    if (message.replyMessageId) {
      /**
       * 내가 보낸 메시지
       * 내가 보낸 메시지의 정보와 답장으로 올 메시지의 id를 포함하고 있음
       */
      console.log('내가 보낸 메시지');

      // 현재 해당 채팅방에 있는지 확인
      const characterId = getCurrentCharacterId();
      if (!characterId || message.messageTo !== characterId) return;

      // 내 메시지 추가
      get().chatStore?.addChatContents({
        speaker: 'me', content: message.content, timestamp: message.createdAt.getTime(), loading: false,
      });
      // 답으로 올 메시지 추가
      get().chatStore?.addChatContents({
        speaker: message.characterName, content: '', timestamp: message.createdAt.getTime() + 1, loading: true,
      });
      // 나중에 답이 왔을때 해당 메시지를 찾기 위해 메시지 ID 값을 키로 가지는 Map에 정보 저장
      get().processingMessagePool.set(message.replyMessageId, [message.createdAt.getTime() + 1, '']);
    } else if (getCurrentCharacterId() === message.messageFrom) {
      // 현재 채팅중인 상대에게서 메시지 도착
      console.log('현재 채팅중인 캐릭터에게서 메시지 도착');

      /**
       * TODO: 받은 메시지 채팅창에 넣기
       */
      const messagingPool = get().processingMessagePool;
      const [prevTime, prevMessage] = messagingPool.get(message.messageId)!;

      if (!prevTime) return;

      /**
       * TODO: status를 enum으로 관리 -> switch 사용?
       */
      if (message.status === 'PROCESSING') { // 메시지 생성중.. 이전 내용에 덧붙여서 저장하기
        const content = prevMessage + message.content;
        /**
         * TODO: loadedChat에서 시간으로 메시지를 찾아서 일단은 시간을 바꾸지는 않았음
         *        추후 메시지를 찾는 방식이 변경되면 바꾸기
         */
        messagingPool.set(message.messageId, [prevTime, content]);
        get().chatStore?.loadedChat(prevTime, content, prevTime);
      } else if (message.status === 'SUCCESS') { // 메시지 생성 완료. 기존 내용 완전히 갈아끼우기
        messagingPool.delete(message.messageId); // 생성 완료된 메시지는 Map에서 제거
        get().chatStore?.loadedChat(prevTime, message.content.trim(), message.createdAt.getTime());
      }
    } else { // 다른 페이지에 있거나 다른 캐릭터와 채팅중
      console.log('현재 채팅중이 아닌 캐릭터에게서 메시지 도착');
      /**
       * TODO: 다른 메신저 어플처럼 누구한테서 메시지 왔다고 알림 띄우기?
       */
    }
  },
  sendMessage: (message:string) => {
    if (message && get().stompClient!.connected) {
      const chatMessage = { content: message };

      // 현재 채팅 페이지에 있는지 확인
      const characterId = getCurrentCharacterId();
      if (characterId) {
                get().stompClient!.publish({
                  destination: `/chat/${characterId}`,
                  body: JSON.stringify(chatMessage),
                });
      }
    } else if (!get().stompClient!.connected) {
      get().connect();
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
    return pathMatcher[1];
  }
  return null;
}

interface MessageObject {
    messageId:string,
    replyMessageId:string,
    status:string,
    content:string,
    messageFrom:string,
    messageTo:string,
    characterName:string,
    createdAt:Date,
}

export default useSocketStore;
