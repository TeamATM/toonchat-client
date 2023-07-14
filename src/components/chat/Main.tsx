// 주요 채팅 내용이 들어올 예정
import type { FC } from 'react';

interface MainProps {
  chatContents: {id: number, speaker: string, content: string}[];
}

const Main: FC<MainProps> = ({ chatContents }) => (
  <main>
    {chatContents.map(
      (chat) => (
        <li key={chat.id}>
          {chat.speaker}
          {' '}
          :
          {chat.content}
        </li>
      ),
    )}
  </main>
);

export default Main;
