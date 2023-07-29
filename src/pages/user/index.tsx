import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import SectionTitle from '@/components/main/SectionTitle';

const ChatHome = () => (
  <>
    <ToonChatHead title="Friends" />
    <section css={pageCSS}>
      <header css={css`width:100%;`}>
        <div css={css`width:100%; display:flex; justify-content:space-between ;`}>
          <SectionTitle>Recommend</SectionTitle>
          searchbar
        </div>
        <div css={css`width:100%; display:flex; justify-content:center;`}>
          <div>이영준추천섹션</div>
          <div>김미소추천섹션</div>
        </div>
      </header>
      <main>
        <SectionTitle>Friends</SectionTitle>
      </main>
      <BottomNavigation pageName="Home" />
    </section>
  </>
);

export default ChatHome;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
