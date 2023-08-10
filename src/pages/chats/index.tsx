import { css } from '@emotion/react';
import SEO from '@/components/common/head/SEO';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import SearchBar from '@/components/common/searchBar/SearchBar';
import ChatLogs from '@/components/main/ChatLogs';
import SectionTitle from '@/components/common/sectionTitle/SectionTitle';

const ChatMain = () => (
  <>
    <SEO title="Chat" />
    <section css={pageCSS}>
      <div css={contentsCSS}>
        <header css={css`width:100%; padding-top:0.6rem;`}>
          <div css={titleSectionCSS}>
            <SectionTitle>Friends</SectionTitle>
            <SearchBar />
          </div>
        </header>
        <main css={css`width:100%; display:flex; flex-direction:column;`}>
          <ChatLogs />
        </main>
      </div>
      <BottomNavigation pageName="Chat" />
    </section>
  </>
);

export default ChatMain;

const pageCSS = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  padding-bottom: 0;
`;

const contentsCSS = css`
  width: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const titleSectionCSS = css`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 0.6rem;
  padding-top: 0.6rem;`;
