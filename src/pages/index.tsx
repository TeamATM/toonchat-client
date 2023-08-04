import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import ToonChatHead from '@/components/head/ToonChatHead';
import Button from '@/components/user/Button';

const Home = () => (
  <>
    <ToonChatHead title="Home" />
    <section css={pageCSS}>
      <main css={css`justify-content:center; margin:auto 0;`}>
        <Image
          src="/thumbnail.png"
          alt="썸네일"
          width={295}
          height={150}
        />
      </main>
      <footer css={css`width:100%; padding: 1.5rem;`}>
        <Link href="/login">
          <Button theme="green">
            Log in
          </Button>
        </Link>
        <Link href="/chats/0">
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
  padding: 0.5rem;
`;
