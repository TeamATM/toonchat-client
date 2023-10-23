import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import PostList from '@/components/community/PostList';
import CommunityHeader from '@/components/community/CommunityHeader';
import WriteButton from '@/components/community/WriteButton';

const Board = () => (
  <>
    <SEO title="Community - Board" />
    <section css={pageCSS}>
      <CommunityHeader />
      <WriteButton />
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
  align-items: center;
  padding: 0.625rem;
`;
