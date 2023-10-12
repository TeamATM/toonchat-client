import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import SectionTitle from '@/components/common/sectionTitle/SectionTitle';
import SearchBar from '@/components/common/searchBar/SearchBar';
import BoardList from '@/components/community/BoardList';

const Community = () => (
  <>
    <SEO title="Community" />
    <section css={pageCSS}>
      <header css={css`width:100%; padding-top:0.6rem;`}>
        <div css={titleSectionCSS}>
          <SectionTitle>Community</SectionTitle>
          <SearchBar />
        </div>
      </header>
      <main>
        <BoardList />
      </main>
      <BottomNavBar pageName="Community" />
    </section>
  </>
);

export default Community;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  padding-bottom: 0;
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
