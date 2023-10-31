import { css } from '@emotion/react';
import TimeStamp from '@/components/common/timeStamp/TimeStamp';
import { useEffect, useState } from 'react';
import { recentChatAPI } from '@/utils/api/chats';
import { CharacterInfo } from '@/types/characterInfo';
import FriendWrapper from './friend/FriendWrapper';
import FriendInfo from './friend/FriendInfo';
import ChatBadge from './friend/ChatBadge';
import SkeletonList from '../common/skeleton/SkeletonList';

interface recentMessageWithCharacterInfo {
  characterInfo: CharacterInfo;
  lastMessage: {
    content: string;
    createdAt: number;
    fromUser: boolean;
  };
}

const ChatLogs = () => {
  const [recentChatList, setRecentChatList] = useState<recentMessageWithCharacterInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recentChatAPI()
      .then((recentChatData) => {
        setRecentChatList([...recentChatData]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, []);
  if (loading) {
    return (
      <section css={chatLogsWrapperCSS}>
        <SkeletonList />
      </section>
    );
  }

  return (
    <section css={chatLogsWrapperCSS}>
      {recentChatList.map(({ characterInfo, lastMessage }) => (
        <FriendWrapper
          key={characterInfo.characterId}
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
