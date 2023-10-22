import webServerInstance from '@/utils/axiosInstance/webServerInstance';

export const findAllCharacters = async () => {
  const result = await webServerInstance.get('/characters');
  return result.data;
};

export const findCharacterById = async (characterId: string) => {
  const result = await webServerInstance.get(`/characters/${characterId}`);
  console.log(`find By Id characters : ${result.data}`);
  return result.data;
};
