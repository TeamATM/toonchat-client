import { CharacterInfo } from '@/types/characterInfo';
import webServerInstance from '@/utils/axiosInstance/webServerInstance';
import ssrInstance from '@/utils/axiosInstance/ssrInstance';

export const findAllCharacters = async () => {
  const result = await webServerInstance.get<CharacterInfo[]>('/characters');
  return result.data;
};

export const findCharacterById = async (characterId: string) => {
  const result = await webServerInstance.get<CharacterInfo>(`/characters/${characterId}`);
  return result.data;
};

export const ssrFindAllCharacters = async () => {
  const result = await ssrInstance.get<CharacterInfo[]>('/api/characters');
  return result.data;
};

export const ssrFindCharacterById = async (characterId: string) => {
  const result = await ssrInstance.get<CharacterInfo>(`/api/characters/${characterId}`);
  return result.data;
};
