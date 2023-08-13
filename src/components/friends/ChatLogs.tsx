import { css } from '@emotion/react';
import TimeStamp from '@/components/common/timeStamp/TimeStamp';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FriendWrapper from './friend/FriendWrapper';
import FriendInfo from './friend/FriendInfo';
import ChatBadge from './friend/ChatBadge';

interface RecentData {
  content: string,
  characterName: string,
  createdAt: number,
}

const ChatLogs = () => {
  // TODO: 데이터셋을 한 번에 API로 받아오면 더 편하게 작업할 수 있을 것 같음
  const [chatLogDataSet, setchatLogDataSet] = useState(chatLogDataSample);

  const callRecentAPI = async (index: number, characterId: string) => {
    const recentData = await axios.get<RecentData>(`${process.env.SERVER_URL || 'http://localhost:8080'}/chat/${characterId}?recent=true`);
    chatLogDataSet[index].characterName = recentData.data.characterName;
    chatLogDataSet[index].message = recentData.data.content;
    chatLogDataSet[index].timestamp = recentData.data.createdAt;
    setchatLogDataSet([...chatLogDataSet]);
  };

  useEffect(() => {
    for (let i = 0; i < chatLogDataSet.length; i += 1) {
      callRecentAPI(i, i.toString());
    }
  }, []);

  return (
    <section css={chatLogsWrapperCSS}>
      {chatLogDataSet.map((data, index) => (
        // TODO: 여러 캐릭터가 있을 때 스크롤이 가능한지 확인하기 위함
        <FriendWrapper
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          linkUrl={`/chats/${data.characterId}`}
        >
          <FriendInfo
            characterName={data.characterName}
            message={data.message}
            imageUrl={data.imageUrl}
          />
          <div css={subInfoWrapperCSS}>
            <TimeStamp timestamp={data.timestamp} />
            <ChatBadge unreadCount={data.unreadCount} />
          </div>
        </FriendWrapper>
      ))}
    </section>
  );
};

export default ChatLogs;

const chatLogsWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 0.375rem;
  padding-top: 1.25rem;
`;

const subInfoWrapperCSS = css`
  display:flex;
  flex-direction:column;
  align-items: flex-end;
  margin-right: 0.625rem;
`;

const chatLogDataSample = [
  {
    characterId: '0',
    characterName: '이영준',
    imageUrl: '/leeyj.png',
    message: '.',
    timestamp: 123123,
    unreadCount: 1,
  }, {
    characterId: '1',
    characterName: '김미소',
    imageUrl: '/kimms.png',
    message: '.',
    timestamp: 123123,
    unreadCount: 0,
  },
];
