import { postDateParse } from '@/utils/services/date';
import FriendWrapper from '@/components/friends/friend/FriendWrapper';
import HeartIcon from '@/components/icons/HeartIcon';
import CommentIcon from '@/components/icons/CommentIcon';
import color from '@/styles/color';
import { css } from '@emotion/react';
import { FC } from 'react';
import { PostData } from '@/types/post';

interface PostStates {
  characterId: string,
  post: PostData
}

const Post: FC<PostStates> = ({ characterId, post }) => (
  <>
    <FriendWrapper
      key={post.id}
      linkUrl={`/community/${characterId}/${post.id}`}
    >
      <div css={postCSS}>
        <div css={titleCSS}>{post.title}</div>
        <div css={contentCSS}>{`${postDateParse(post.createdAt)} | ${post.writerName}`}</div>
      </div>
      <ul css={liCSS}>
        <li title="좋아요" css={liCSS}>
          <HeartIcon color={color.gray} />
          <div css={statusCSS}>{post.likeCount}</div>
        </li>
        <li title="댓글" css={liCSS}>
          <CommentIcon color={color.gray} />
          <div css={statusCSS}>{post.comments.length}</div>
        </li>
      </ul>
    </FriendWrapper>
    <div css={lineCSS} />
  </>
);

export default Post;

const postCSS = css`
  padding: 0.2rem 0 0.2rem 0.5rem;
  width: 100%;
`;

const titleCSS = css`
  font-size: 0.9rem;
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
  padding-right: 0.3rem;
`;

const statusCSS = css`
  font-size: 0.625rem;
  font-weight: bold;
  color: ${color.gray};
`;

const lineCSS = css`
  display: block;
  height: 1px;
  width: 100%;
  background: ${color.lightGray};
  margin: 0.2rem 0;
`;
