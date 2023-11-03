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

export const findCommentsByPostAndCharacterId = async (characterId: string, postId: string) => {
  const result = await webServerInstance.get<CommentData[]>(`boards/${characterId}/${postId}/comments`);
  return result.data;
};

export const createComment = async (characterId: string, postId: string, comment: string) => {
  const result = await webServerInstance.post(`boards/${characterId}/${postId}/comments`, { comment });
  return result.data;
};

export const deleteComment = async (commentId: string) => {
  const result = await webServerInstance.put(`comments/${commentId}`);
  return result.data;
};

export const postLike = async (postId: number) => {
  const result = await webServerInstance.post(`likes/${postId}`);
  return result.data;
};
