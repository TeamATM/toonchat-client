// 주요 채팅 내용이 들어올 예정
import { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import useChatStore from '@/store/chat';
import MySpeak from './messageBox/MySpeak';
import CharacterSpeak from './messageBox/CharacterSpeak';
import CharacterLoading from './messageBox/CharacterLoading';

const Main = () => {
  const { chatContents } = useChatStore();
  const messageEndRef = useRef<HTMLDivElement | null>(null);

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
          if (chat.loading) {
            return (
              <CharacterLoading
                key={chat.id}
                speaker={chat.speaker}
              />
            );
          }
          return (
            <CharacterSpeak
              key={chat.id}
              speaker={chat.speaker}
              content={chat.content}
              timestamp={chat.timestamp}
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
