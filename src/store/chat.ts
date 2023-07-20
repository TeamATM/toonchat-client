import { create } from 'zustand';

interface ChatContentsState {
  id: number, speaker: string, content: string, timestamp: number
}

interface ChatState {
  chatContents: ChatContentsState[],
  addChatContents: (newChat: ChatContentsState) => void;
  idCounter: number,
  increaseIdCounter: () => void;
}

const useChatStore = create<ChatState>((set) => ({
  chatContents: [],
  addChatContents: (newChat) => set(
    (state) => ({ chatContents: [...state.chatContents, newChat] }),
  ),
  idCounter: 0,
  increaseIdCounter: () => set((state) => ({ idCounter: state.idCounter + 1 })),
}));

export default useChatStore;
