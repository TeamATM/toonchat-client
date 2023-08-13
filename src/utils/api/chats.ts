import defaultInstance from '@/utils/axiosInstance/defaultInstance';

interface RecentData {
  createdAt: number;
  content: string;
  characterName: string;
}

export const recentChatAPI = async (characterId: string) => {
  const result = await defaultInstance.get<RecentData>(`${process.env.SERVER_URL || 'http://localhost:8080'}/chat/${characterId}?recent=true`);
  return result.data;
};

// TODO: 다른 API 만들기
export const otherAPI = () => console.log(123);
