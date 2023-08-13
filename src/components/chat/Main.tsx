// 주요 채팅 내용이 들어올 예정
import {
  useRef, useEffect, FC, useState,
} from 'react';
import { css } from '@emotion/react';
import useChatStore from '@/store/chat';
import getHistory from '@/utils/services/chats';
import MySpeak from './messageBox/MySpeak';
import CharacterSpeak from './messageBox/CharacterSpeak';
import Loading from '../common/dialog/Loading';

interface MainProps {
  characterId: string,
  characterName: string,
  imageUrl: string
}

const Main:FC<MainProps> = ({ characterId, characterName, imageUrl }) => {
  const { chatContents, clearChatContents, initChatContents } = useChatStore();
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    // TODO: Loading으로 채팅을 못치게 막아야할 것 같음
    clearChatContents();
    setLoadingHistory(true);
    getHistory(setLoadingHistory, characterId, characterName, initChatContents);
  }, [characterId, characterName, clearChatContents, initChatContents]);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatContents]);

  return (
    <main css={mainCSS}>
      {loadingHistory && <Loading />}
      {chatContents.map(
        (chat) => {
          if (chat.speaker === 'me') {
            return <MySpeak key={chat.id} content={chat.content} timestamp={chat.timestamp} />;
          }
          return (
            <CharacterSpeak
              key={chat.id}
              speaker={chat.speaker}
              imageUrl={imageUrl}
              content={chat.content}
              timestamp={chat.timestamp}
              loading={chat.loading}
            />
          );
        },
      )}
      <div ref={messageEndRef} />
    </main>
  );
};

export default Main;

const mainCSS = css`
  padding: 0.25rem;
  max-width: 400px;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;
