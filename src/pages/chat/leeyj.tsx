import Footer from '@/components/chat/Footer';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import useChatStore from '@/store/chat';
import { css } from '@emotion/react';

const Leeyj = () => {
  const {
    chatContents, addChatContents, idCounter, increaseIdCounter,
  } = useChatStore();

  const addChatContent = async (message: string, timestamp: number) => {
    // TODO: AI 대답 API나 소켓 통신이 가능하게 되면 다시 돌려놓을 코드

    addChatContents({
      id: idCounter, speaker: 'me', content: message, timestamp,
    });
    increaseIdCounter();

    // TODO: AI의 대답으로 수정될 부분 (API 호출했다고 가정)
    return callLeeyjAPI(message, timestamp);
  };

  const callLeeyjAPI = async (message : string, timestamp: number) => {
    const response = await fetch('/api/hello');
    const jsonData = await response.json();

    // 함수의 input값인 message, timestamp를 아직 안쓰고 있어서 콘솔로그 찍어놓음
    console.log(message, timestamp);

    addChatContents({
      id: idCounter + 1, speaker: '이영준', content: jsonData.say, timestamp: Date.now(),
    });
    increaseIdCounter();
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
