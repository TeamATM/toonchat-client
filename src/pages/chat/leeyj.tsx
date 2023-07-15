import Footer from '@/components/chat/Footer';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import { css } from '@emotion/react';
import { useState } from 'react';

interface chatContentsState {
  id: number, speaker: string, content: string, timestamp: number
}

const Leeyj = () => {
  const [chatContents, setChatContents] = useState<chatContentsState[]>([]);
  const [idCounter, setIdCounter] = useState<number>(0);

  const addChatContent = async (message: string, timestamp: number) => {
    // TODO: AI 대답 API나 소켓 통신이 가능하게 되면 다시 돌려놓을 코드
    setChatContents([...chatContents, {
      id: idCounter, speaker: 'me', content: message, timestamp,
    }]);
    // setIdCounter(idCounter + 1);

    // TODO: AI의 대답으로 수정될 부분 (API 호출했다고 가정)
    return callLeeyjAPI(message, timestamp);
  };

  const callLeeyjAPI = async (message : string, timestamp: number) => {
    const response = await fetch('/api/hello');
    const jsonData = await response.json();
    setChatContents([...chatContents, {
      id: idCounter, speaker: 'me', content: message, timestamp,
    },
    {
      id: idCounter + 1, speaker: '이영준', content: jsonData.say, timestamp: Date.now(),
    }]);
    setIdCounter(idCounter + 2);
  };

  return (
    <section css={pageCss}>
      <Header />
      <Main chatContents={chatContents} />
      <Footer addChatContents={addChatContent} />
    </section>
  );
};

export default Leeyj;

const pageCss = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
