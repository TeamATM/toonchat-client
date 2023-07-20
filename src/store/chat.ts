import { create } from 'zustand';

interface ChatContentsState {
  id: number, speaker: string, content: string, timestamp: number, loading: boolean,
}

interface NewChatContentState {
  speaker: string, content: string, timestamp: number, loading: boolean,
}

interface ChatState {
  chatContents: ChatContentsState[],
  addChatContents: (newChat: NewChatContentState) => number;
  loadedChat: (loadedIndex: number, message: string, timestamp: number) => void;
}

const useChatStore = create<ChatState>((set, get) => ({
  chatContents: [],
  addChatContents: (newChat) => {
    set(
      (state) => ({
        chatContents: [...state.chatContents, { ...newChat, id: state.chatContents.length + 1 }],
      }),
    );
    return get().chatContents.length - 1;
  },
  loadedChat: (loadedIndex, message, timestamp) => set(
    (state) => ({
      chatContents: state.chatContents.map((chatContent, index) => {
        if (index === loadedIndex) {
          return {
            ...chatContent, loading: false, content: message, timestamp,
          };
        }
        return chatContent;
      }),
    }),
  ),
}));

export default useChatStore;
