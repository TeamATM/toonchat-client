import { CommentData } from '@/types/post';
import { findCommentsByPostAndCharacterId } from '@/utils/api/boards';
import { create } from 'zustand';

interface CommentState {
  comments: CommentData[],
  loading: boolean,
  fetchComments: (characterId: string, postId: string) => void;
}

const useCommentStore = create<CommentState>((set) => ({
  comments: [],
  loading: true,
  fetchComments: async (characterId, postId) => {
    set({ loading: false });
    try {
      const response = await findCommentsByPostAndCharacterId(characterId, postId);
      console.log(response);
      set({ comments: response, loading: true });
    } catch (error) {
      console.error(error);
      set({ loading: true });
    }
  },
}));

export default useCommentStore;
