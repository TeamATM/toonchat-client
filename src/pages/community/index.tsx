import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import { useEffect } from 'react';
import { findAllBoards, findBoardsById } from '@/utils/api/boards';

const Community = () => {
  useEffect(() => {
    findAllBoards('1');
    findBoardsById('1', '1');
  }, []);

  return (
    <>
      <SEO title="Community" />
      <section css={pageCSS}>
        커뮤니티 기능은 추후 제공될 예정입니다.
      </section>
      <BottomNavBar pageName="Community" />
    </>
  );
};
export default Community;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
