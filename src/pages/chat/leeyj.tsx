import Footer from '@/components/chat/Footer';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import { css } from '@emotion/react';
import { useState } from 'react';

const Leeyj = () => {
  const [chatContents, setChatContents] = useState<{id: number, content: string}[]>([]);
  const [idCounter, setIdCounter] = useState<number>(0);

  const addChatContent = (message: string) => {
    setChatContents([...chatContents, { id: idCounter, content: message }]);
    setIdCounter(idCounter + 1);
  };

  return (
    <main css={mainCss}>
      <Header />
      <Main chatContents={chatContents} />
      <Footer addChatContents={addChatContent} />
    </main>
  );
};

export default Leeyj;

const mainCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: green;
`;
