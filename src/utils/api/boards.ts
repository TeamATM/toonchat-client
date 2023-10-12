import webServerInstance from '@/utils/axiosInstance/webServerInstance';

export const findAllBoards = async () => {
  const result = await webServerInstance.get('/characters');
  return result.data;
};

export const findBoardById = async (characterId: string) => {
  const result = await webServerInstance.get(`boards/${characterId}`);
  return result.data;
};

export const findPostById = async (characterId: string, postId: string) => {
  const result = await webServerInstance.get(`boards/${characterId}/${postId}`);
  return result.data;
};
