// 주요 채팅 내용이 들어올 예정
import type { FC } from 'react';
import { css } from '@emotion/react';
import MySpeak from './MySpeak';
import CharacterSpeak from './CharacterSpeak';

interface MainProps {
  chatContents: {id: number, speaker: string, content: string, date: number}[];
}

const Main: FC<MainProps> = ({ chatContents }) => (
  <main css={mainCSS}>
    {chatContents.map(
      (chat) => {
        console.log(chat.date, chat.content);
        if (chat.speaker === 'me') {
          return <MySpeak key={chat.id} content={chat.content} />;
        }
        return <CharacterSpeak key={chat.id} speaker={chat.speaker} content={chat.content} />;
      },
    )}
  </main>
);

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
