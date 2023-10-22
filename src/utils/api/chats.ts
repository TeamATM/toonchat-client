import chatInstance from '../axiosInstance/chatInstance';

export const recentChatAPI = async () => {
  const result = await chatInstance.get('/chat/recent');
  return result.data;
};

export const chatHistoryAPI = async (characterId: number) => {
  const result = await chatInstance.get(`/chat/history/${characterId}`);
  return result.data;
};
