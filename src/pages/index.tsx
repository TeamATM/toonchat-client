import ToonChatHead from '@/components/head/ToonChatHead';
import Button from '@/components/user/Button';
import { css } from '@emotion/react';
import Link from 'next/link';

const Home = () => (
  <>
    <ToonChatHead title="Home" />
    <section css={pageCSS}>
      <main css={css`margin: auto;`}>
        asd
      </main>
      <footer css={css`width:100%; padding: 24px;`}>
        <Link href="/user/login">
          <Button theme="green">
            Log in
          </Button>
        </Link>
        <Link href="/chat/0">
          <Button theme="white">
            영준이와 대화하기
          </Button>
        </Link>
      </footer>
    </section>
  </>
);

export default Home;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
