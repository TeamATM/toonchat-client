import Footer from '@/components/chat/Footer';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import useChatStore from '@/store/chat';
import { css } from '@emotion/react';

const Leeyj = () => {
  const { chatContents } = useChatStore();

  return (
    <section css={pageCSS}>
      <Header />
      <Main chatContents={chatContents} />
      <Footer />
    </section>
  );
};

export default Leeyj;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
