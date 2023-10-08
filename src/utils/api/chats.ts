import defaultInstance from '@/utils/axiosInstance/defaultInstance';
import chatInstance from '../axiosInstance/chatInstance';

export const recentChatAPI = async (characterId: string) => {
  const result = await defaultInstance.get(`/chat/${characterId}?recent=true`);
  return result.data;
};

export const chatHistoryAPI = async (characterId: string) => {
  const result = await chatInstance.get(`/chat/history/${characterId}`);
  return result.data;
};
