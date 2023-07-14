import Footer from '@/components/chat/Footer';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import { css } from '@emotion/react';
import { useState } from 'react';

interface chatContentsState {
  id: number, speaker: string, content: string
}

const Leeyj = () => {
  const [chatContents, setChatContents] = useState<chatContentsState[]>([]);
  const [idCounter, setIdCounter] = useState<number>(0);

  const addChatContent = async (message: string) => {
    // TODO: AI 대답 API나 소켓 통신이 가능하게 되면 다시 돌려놓을 코드
    setChatContents([...chatContents, { id: idCounter, speaker: 'me', content: message }]);
    // setIdCounter(idCounter + 1);

    // TODO: AI의 대답으로 수정될 부분 (API 호출했다고 가정)
    return callLeeyjAPI(message);
  };

  const callLeeyjAPI = async (message : string) => {
    const response = await fetch('http://localhost:3000/api/hello');
    const jsonData = await response.json();
    setChatContents([...chatContents, { id: idCounter, speaker: 'me', content: message }, { id: idCounter + 1, speaker: '이영준', content: jsonData.say }]);
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
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
