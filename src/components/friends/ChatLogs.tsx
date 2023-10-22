import { css } from '@emotion/react';
import TimeStamp from '@/components/common/timeStamp/TimeStamp';
import { useEffect, useState } from 'react';
import { recentChatAPI } from '@/utils/api/chats';
import { CharacterInfo } from '@/types/characterInfo';
import FriendWrapper from './friend/FriendWrapper';
import FriendInfo from './friend/FriendInfo';
import ChatBadge from './friend/ChatBadge';

interface recentMessageWithCharacterInfo {
  characterInfo: CharacterInfo;
  lastMessage: {
    content: string;
    createdAt: number;
    fromUser: boolean;
  };
}

const ChatLogs = () => {
  // TODO: 데이터셋을 한 번에 API로 받아오면 더 편하게 작업할 수 있을 것 같음
  const [recentChatList, setRecentChatList] = useState<recentMessageWithCharacterInfo[]>([]);

  const callRecentAPI = async () => {
    const recentChatData = await recentChatAPI();
    setRecentChatList([...recentChatData]);
  };

  useEffect(() => {
    callRecentAPI();
  }, []);

  return (
    <section css={chatLogsWrapperCSS}>
      {recentChatList.map(({ characterInfo, lastMessage }, index) => (
        <FriendWrapper
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          linkUrl={`/chats/${characterInfo.characterId}`}
        >
          <FriendInfo
            characterName={characterInfo.characterName}
            message={lastMessage.content}
            profileImageUrl={characterInfo.profileImageUrl}
          />
          <div css={subInfoWrapperCSS}>
            <TimeStamp timestamp={lastMessage.createdAt} />
            <ChatBadge unreadCount={lastMessage.fromUser} />
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
