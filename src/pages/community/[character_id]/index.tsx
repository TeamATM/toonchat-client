import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import PostList from '@/components/community/PostList';
import CommunityHeader from '@/components/community/CommunityHeader';

const Board = () => (
  <>
    <SEO title="Community - Board" />
    <CommunityHeader />
    <section css={pageCSS}>
      <PostList />
    </section>
    <BottomNavBar pageName="Community" />
  </>
);

export default Board;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
