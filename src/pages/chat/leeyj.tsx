import MessageInput from '@/components/chat/MessageInput';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import { css } from '@emotion/react';

const Leeyj = () => (
  <section css={pageCSS}>
    <Header />
    <Main />
    <MessageInput />
  </section>
);

export default Leeyj;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
