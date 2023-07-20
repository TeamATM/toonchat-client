import { create } from 'zustand';

interface ChatContentsState {
  id: number, speaker: string, content: string, timestamp: number
}

interface NewChatContentState {
  speaker: string, content: string, timestamp: number
}

interface ChatState {
  chatContents: ChatContentsState[],
  addChatContents: (newChat: NewChatContentState) => void;
}

const useChatStore = create<ChatState>((set) => ({
  chatContents: [],
  addChatContents: (newChat) => set(
    (state) => ({
      chatContents: [...state.chatContents, { ...newChat, id: state.chatContents.length + 1 }],
    }),
  ),
}));

export default useChatStore;
