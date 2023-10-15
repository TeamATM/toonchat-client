import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { PostData } from '@/types/post';
import { useRouter } from 'next/router';
import { findBoardById } from '@/utils/api/boards';
import Loading from '../common/dialog/Loading';
import FriendInfo from '../friends/friend/FriendInfo';
import FriendWrapper from '../friends/friend/FriendWrapper';

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
          <div key={post.id}>
            <FriendWrapper
              key={post.id}
              linkUrl={`/community/${characterId}/${post.id}`}
            >
              <FriendInfo
                characterName={post.writerName}
                // TODO: 백엔드는 이미지를 뿌려라!
                // imageUrl={characterInfo.profileUrl}
                message={`임시 정보 입니다. ${post.title}`}
                imageUrl="/leeyj.png"
              />
            </FriendWrapper>
          </div>
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
  padding: 0.375rem;
  padding-top: 1.25rem;
`;
