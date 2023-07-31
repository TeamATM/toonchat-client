import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import SearchBar from '@/components/main/SearchBar';
import SectionTitle from '@/components/main/SectionTitle';

const ChatMain = () => (
  <>
    <ToonChatHead title="Chat" />
    <section css={pageCSS}>
      <div css={contentsCSS}>
        <header css={css`width:100%; padding-top:10px;`}>
          <div css={titleSectionCSS}>
            <SectionTitle>Friends</SectionTitle>
            <SearchBar />
          </div>
        </header>
      </div>
      <BottomNavigation pageName="Chat" />
    </section>
  </>
);

export default ChatMain;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const contentsCSS = css`
  height: 600px;
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
  padding-left:20px;
  padding-right: 10px;
  padding-top: 10px;
`;
