import ToonChatHead from '@/components/head/ToonChatHead';
import Button from '@/components/user/Button';
import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => (
  <>
    <ToonChatHead title="Home" />
    <section css={pageCSS}>
      <main css={css`justify-content:center; margin:auto 0;`}>
        <Image
          src="/thumbnail.png"
          alt="썸네일"
          width={441}
          height={143}
        />
      </main>
      <footer css={css`width:100%; padding: 24px;`}>
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
  padding: 10px;
`;
