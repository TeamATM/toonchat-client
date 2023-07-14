// 주요 채팅 내용이 들어올 예정
import type { FC } from 'react';
import { css } from '@emotion/react';
import MySpeak from './MySpeak';

interface MainProps {
  chatContents: {id: number, speaker: string, content: string}[];
}

const Main: FC<MainProps> = ({ chatContents }) => (
  <main css={mainCSS}>
    {chatContents.map(
      (chat) => (
        <MySpeak key={chat.id} id={chat.id} content={chat.content} />
      ),
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
