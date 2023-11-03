import { CommentData } from '@/types/post';
import webServerInstance from '@/utils/axiosInstance/webServerInstance';

export const findBoardById = async (characterId: string) => {
  const result = await webServerInstance.get(`boards/${characterId}`);
  return result.data;
};

export const findPostById = async (characterId: string, postId: string) => {
  const result = await webServerInstance.get(`boards/${characterId}/${postId}`);
  return result.data;
};

export const createPost = async (characterId: string, title: string, content: string) => {
  const result = await webServerInstance.post(`boards/${characterId}`, { title, content });
  return result;
};

export const readComment = async (postId: string) => {
  const result = await webServerInstance.get<CommentData[]>(`comments/${postId}`);
  return result.data;
};

export const createComment = async (postId: string, comment: string) => {
  const result = await webServerInstance.post(`comments/${postId}`, { comment });
  return result.data;
};

export const deleteComment = async (postId: string, commentId: string) => {
  const result = await webServerInstance.delete(`comments/${postId}/${commentId}`);
  return result.data;
};

export const updateComment = async (postId: string, commentId: string) => {
  const result = await webServerInstance.put(`comments/${postId}/${commentId}`);
  return result.data;
};

export const postLike = async (postId: number) => {
  const result = await webServerInstance.post(`likes/${postId}`);
  return result.data;
};
