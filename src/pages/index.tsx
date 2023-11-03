import { css } from '@emotion/react';
import Image from 'next/image';
import SEO from '@/components/common/head/SEO';
import InApp from '@/components/common/inApp/InApp';
import SessionButtons from '@/components/account/SessionButtons';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isInApp, setIsInApp] = useState<boolean>(false);

  const isInAppBrowser = () => {
    const agents = ['kakao', '[fb', 'instagram', 'trill', 'line'];
    const userAgent = (typeof window !== 'undefined') ? window.navigator.userAgent.toLowerCase() : '';
    return agents.some((agent) => userAgent.includes(agent));
  };

  useEffect(() => {
    setIsInApp(isInAppBrowser());
  }, []);

  return (
    <>
      <SEO title="Home" />
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
          {isInApp ? <InApp /> : <SessionButtons />}
        </footer>
      </section>
    </>
  );
};

export default Home;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
