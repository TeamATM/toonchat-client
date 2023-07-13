import Footer from '@/components/chat/Footer';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import { css } from '@emotion/react';

const leeyj = () => (
  <main css={mainCss}>
    <Header />
    <Main />
    <Footer />
  </main>
);

export default leeyj;

const mainCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: green;
`;
