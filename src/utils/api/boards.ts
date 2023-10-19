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
