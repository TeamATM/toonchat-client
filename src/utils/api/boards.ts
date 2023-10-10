import boardInstance from '@/utils/axiosInstance/boardInstance';

export const findAllBoards = async (characterId: string) => {
  const result = await boardInstance.get(characterId);
  return result.data;
};

export const findBoardsById = async (characterId: string, postId: string) => {
  const result = await boardInstance.get(`${characterId}/${postId}`);
  return result.data;
};
