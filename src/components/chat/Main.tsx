// 주요 채팅 내용이 들어올 예정
import { useRef, useEffect, FC } from 'react';
import { css } from '@emotion/react';
import useChatStore from '@/store/chat';
import MySpeak from './messageBox/MySpeak';
import CharacterSpeak from './messageBox/CharacterSpeak';

interface MainProps {
  characterId: string,
  characterName: string,
  imageUrl: string
}

type BotChat = { bot: string, timestamp: number }
type HumanChat = { human: string, timestamp: number }

// TODO: util같은 폴더에 따로 모아둬야할 것 같은 기능.
const historyToContents = (histories: (
  BotChat|HumanChat)[], characterName: string) => histories.map((history, index) => ({
  id: index,
  speaker: 'bot' in history ? characterName : 'me',
  content: 'bot' in history ? history.bot : history.human,
  timestamp: history.timestamp,
  loading: false,
}));

const Main:FC<MainProps> = ({ characterId, characterName, imageUrl }) => {
  const { chatContents, clearChatContents, initChatContents } = useChatStore();
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // TODO: Loading으로 채팅을 못치게 막아야할 것 같음
    clearChatContents();
    fetch(`/api/chat/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        initChatContents(historyToContents(data.history, characterName));
      });
  }, [characterId, characterName, initChatContents]);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatContents]);

  return (
    <main css={mainCSS}>
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
  padding: 5px;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
