import defaultInstance from '@/utils/axiosInstance/defaultInstance';

export const recentChatAPI = async (characterId: string) => {
  const result = await defaultInstance.get(`/chat/${characterId}?recent=true`);
  return result.data;
};

export const chatHistoryAPI = async (characterId: string) => {
  const result = await defaultInstance.get(`/chat/${characterId}/history`);
  return result.data;
};

export const chatHistory = async (accessToken: string) => {
  console.log(accessToken);
  const token = process.env.EXAMPLE_TOKEN;
  const header:Headers = new Headers();
  header.set('Authorization', `Bearer ${token}`);
  console.log(header);

  const result = await fetch(
    'https://chat.webtoonchat.com/chat/history/2',
    { headers: header },
  );
  // console.log('result');
  return result.json();
};
