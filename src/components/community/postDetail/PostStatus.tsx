import { css } from '@emotion/react';
import HeartIcon from '@/components/icons/HeartIcon';
import CommentIcon from '@/components/icons/CommentIcon';
import ReportIcon from '@/components/icons/ReportIcon';
import color from '@/styles/color';
import useCommentStore from '@/store/comment';

const PostStatus = () => {
  const { comments } = useCommentStore();

  return (
    <ul css={ulCSS}>
      <li title="좋아요" css={liCSS}>
        <HeartIcon color={color.black} />
        <div css={statusCSS}>1</div>
      </li>
      <li title="댓글" css={liCSS}>
        <CommentIcon color={color.black} />
        <div css={statusCSS}>{comments.length}</div>
      </li>
      <li title="신고" css={liCSS}>
        <ReportIcon color={color.black} />
        <div css={statusCSS}>신고</div>
      </li>
    </ul>
  );
};

export default PostStatus;

const ulCSS = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding-top: 1rem;
`;

const liCSS = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

const statusCSS = css`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${color.black};
`;
