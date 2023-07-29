import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import SectionTitle from '@/components/main/SectionTitle';
import SectionLine from '@/components/main/SectionLine';
import Recommends from '@/components/main/Recommends';
import SearchBar from '@/components/main/SearchBar';

const ChatHome = () => (
  <>
    <ToonChatHead title="Friends" />
    <section css={pageCSS}>
      <header css={css`width:100%; padding-top:60px;`}>
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
  align-items: center;
  padding: 10px;
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
