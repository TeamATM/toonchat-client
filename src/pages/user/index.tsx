import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import SectionTitle from '@/components/main/SectionTitle';
import SectionLine from '@/components/main/SectionLine';
import Recommends from '@/components/main/Recommends';
import SearchBar from '@/components/main/SearchBar';
import Friends from '@/components/main/Friends';

const ChatHome = () => (
  <>
    <ToonChatHead title="Home" />
    <section css={pageCSS}>
      <header css={css`width:100%; padding-top:10px;`}>
        <div css={titleSectionCSS}>
          <SectionTitle>Recommend</SectionTitle>
          <SearchBar />
        </div>
        <Recommends />
      </header>
      <SectionLine />
      <main css={css`width:100%; display:flex; flex-direction:column;`}>
        <div css={titleSectionCSS}>
          <SectionTitle>Friends</SectionTitle>
        </div>
        <Friends />
      </main>
      <BottomNavigation pageName="Home" />
    </section>
  </>
);

export default ChatHome;

const pageCSS = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
`;

const titleSectionCSS = css`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding-left:20px;
  padding-right: 10px;
  padding-top: 10px;
`;
