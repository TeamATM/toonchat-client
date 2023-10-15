import { postDateParse } from '@/utils/services/date';
import FriendWrapper from '@/components/friends/friend/FriendWrapper';
import HeartIcon from '@/components/icons/HeartIcon';
import CommentIcon from '@/components/icons/CommentIcon';
import DivideLine from '@/components/common/divideLine/DivideLine';
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
    <DivideLine />
  </>
);

export default Post;

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
