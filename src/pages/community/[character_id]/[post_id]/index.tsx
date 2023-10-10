import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { findBoardsById } from '@/utils/api/boards';

const Board = () => {
  const router = useRouter();
  const { character_id: characterId, post_id: postId } = router.query;
  const [post, setPost] = useState({});
  useEffect(() => {
    if (typeof characterId === 'string' && typeof postId === 'string') {
      findBoardsById(characterId, postId).then((data) => {
        console.log(data);
        setPost(data);
        console.log(post);
      }).catch((error) => {
        console.error('Error fetching post:', error);
      });
    }
  }, [characterId, postId]);

  return (
    <>
      <SEO title="Community - Post" />
      <section css={pageCSS}>
        게시글이 만들어질 예정입니다.
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
