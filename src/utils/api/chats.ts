import defaultInstance from '@/utils/axiosInstance/defaultInstance';

export const recentChatAPI = async (characterId: string) => {
  const result = await defaultInstance.get(`/chat/${characterId}?recent=true`);
  return result.data;
};

export const chatHistoryAPI = async (characterId: string) => {
  const result = await defaultInstance.get(`/chat/${characterId}/history`);
  return result.data;
};
