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
    <ToonChatHead title="Friends" />
    <section css={pageCSS}>
      <div css={contentsCSS}>
        <header css={css`width:100%; padding-top:0.6rem;`}>
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
      </div>
      <BottomNavigation pageName="Friends" />
    </section>
  </>
);

export default ChatHome;

const pageCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  padding-bottom: 0;
  min-height: 100vh;
`;

const contentsCSS = css`
`;

const titleSectionCSS = css`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 0.6rem;
  padding-top: 0.6rem;
`;
