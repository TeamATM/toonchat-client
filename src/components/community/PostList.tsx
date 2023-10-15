import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { PostData } from '@/types/post';
import { useRouter } from 'next/router';
import { findBoardById } from '@/utils/api/boards';
import { postDateParse } from '@/utils/services/date';
import Loading from '@/components/common/dialog/Loading';
import FriendWrapper from '@/components/friends/friend/FriendWrapper';
import color from '@/styles/color';
import HeartIcon from '../icons/HeartIcon';
import CommentIcon from '../icons/CommentIcon';

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
          <FriendWrapper
            key={post.id}
            linkUrl={`/community/${characterId}/${post.id}`}
          >
            <div css={postCSS}>
              <div css={titleCSS}>{post.title}</div>
              <div css={contentCSS}>{`${postDateParse(post.createdAt)} | ${post.writerName}`}</div>
            </div>
            {/* TODO: 댓글, 좋아요를 받아와야합니다! */}
            <ul css={liCSS}>
              <li title="좋아요" css={liCSS}>
                <HeartIcon color={color.black} />
                <div css={statusCSS}>1</div>
              </li>
              <li title="댓글" css={liCSS}>
                <CommentIcon color={color.black} />
                <div css={statusCSS}>3</div>
              </li>
            </ul>
          </FriendWrapper>
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
  width: 100%;
`;

const postCSS = css`
  padding: 0.2rem 0 0.2rem 0;
  width: 100%;
`;

const titleCSS = css`
  font-size: 1rem;
  font-weight:bold;
  color:${color.black};
  padding-bottom: 0.3rem;
`;

const contentCSS = css`
  font-size: 0.75rem;
  color:${color.gray};
`;

const liCSS = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

const statusCSS = css`
  font-size: 0.625rem;
  font-weight: bold;
  color: ${color.black};
`;
