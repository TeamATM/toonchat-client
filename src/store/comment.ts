import { CommentData } from '@/types/post';
import { readComment } from '@/utils/api/boards';
import { create } from 'zustand';

interface CommentState {
  comments: CommentData[],
  loading: boolean,
  fetchComments: (postId: string) => void;
}

const useCommentStore = create<CommentState>((set) => ({
  comments: [],
  loading: true,
  fetchComments: async (postId) => {
    set({ loading: false });
    try {
      const response = await readComment(postId);
      console.log(response);
      set({ comments: response, loading: true });
    } catch (error) {
      console.error(error);
      set({ loading: true });
    }
  },
}));

export default useCommentStore;
