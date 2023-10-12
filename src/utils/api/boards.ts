import boardInstance from '@/utils/axiosInstance/boardInstance';

export const findAllBoards = async () => {
  const result = await boardInstance.get('/characters');
  return result.data;
};

export const findBoardById = async (characterId: string) => {
  const result = await boardInstance.get(`boards/${characterId}`);
  return result.data;
};

export const findPostById = async (characterId: string, postId: string) => {
  const result = await boardInstance.get(`boards/${characterId}/${postId}`);
  return result.data;
};
