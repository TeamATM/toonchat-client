import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { PostData } from '@/types/post';
import { useRouter } from 'next/router';
import { findBoardById } from '@/utils/api/boards';
import Loading from '@/components/common/dialog/Loading';
import Post from './postList/Post';

const PostList = () => {
  const router = useRouter();
  const [postList, setPostList] = useState<PostData[]>([]);
  const { character_id: characterId } = router.query;
  useEffect(() => {
    if (characterId && typeof characterId === 'string') {
      findBoardById(characterId).then((data) => {
        setPostList(data);
        console.log(data);
      }).catch((error) => {
        console.error('Error fetching boards:', error);
      });
    }
  }, [characterId]);

  return (
    <section css={boardListWrapperCSS}>
      {postList ? (
        postList.map((post) => (
          // 문자열 타입만 전달하도록 확인
          typeof characterId === 'string' ? (
            <Post key={post.id} characterId={characterId} post={post} />
          ) : null
        ))
      ) : <Loading />}
    </section>
  );
};

export default PostList;

const boardListWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 2rem;
  padding-top: 1.25rem;
  width: 100%;
`;
