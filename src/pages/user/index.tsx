import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import SectionTitle from '@/components/main/SectionTitle';
import SectionLine from '@/components/main/SectionLine';
import Recommends from '@/components/main/Recommends';

const ChatHome = () => (
  <>
    <ToonChatHead title="Friends" />
    <section css={pageCSS}>
      <header css={css`width:100%; padding-top:60px;`}>
        <div css={recommendTitleSectionCSS}>
          <SectionTitle>Recommend</SectionTitle>
          searchbar
        </div>
        <Recommends />
      </header>
      <SectionLine />
      <main css={css`width:100%; display:flex; flex-direction:column;`}>
        <SectionTitle>Friends</SectionTitle>
        <div>친구1</div>
        <div>친구2</div>
        <div>친구3</div>
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

const recommendTitleSectionCSS = css`
  width:100%;
  display:flex;
  justify-content:space-between;
  padding-left:20px;
  padding-right: 20px;
`;
