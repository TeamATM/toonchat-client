import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import { useEffect, useState } from 'react';
import { findBoardById } from '@/utils/api/boards';
import { useRouter } from 'next/router';
import { PostData } from '@/types/post';

const Board = () => {
  const router = useRouter();
  const [postList, setPostList] = useState<PostData[]>([]);
  const { character_id: characterId } = router.query;
  useEffect(() => {
    if (characterId && typeof characterId === 'string') {
      findBoardById(characterId).then((data) => {
        setPostList(data);
        console.log(data);
        console.log(postList);
      }).catch((error) => {
        console.error('Error fetching boards:', error);
      });
    }
  }, [characterId]);

  return (
    <>
      <SEO title="Community - Board" />
      <section css={pageCSS}>
        게시판이 만들어질 예정입니다.
      </section>
      <BottomNavBar pageName="Community" />
    </>
  );
};
export default Board;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
