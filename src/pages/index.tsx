import ToonChatHead from '@/components/head/ToonChatHead';
import Button from '@/components/user/Button';
import { css } from '@emotion/react';
import Link from 'next/link';

const Home = () => (
  <>
    <ToonChatHead title="Home" />
    <section css={pageCSS}>
      <main css={css`width: 100%; padding: 24px;`}>
        <Link href="/chat/leeyj">
          <Button theme="green">
            바로 영준이와 대화하기
          </Button>
        </Link>
        <Link href="/user/login">
          <Button theme="white">
            Log in
          </Button>
        </Link>
      </main>
    </section>
  </>
);

export default Home;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
