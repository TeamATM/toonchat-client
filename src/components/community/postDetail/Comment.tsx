import Loading from '@/components/common/dialog/Loading';
import useCommentStore from '@/store/comment';
import color from '@/styles/color';
import { CommentProps } from '@/types/post';
import { postDetailDateParse } from '@/utils/services/date';
import { css } from '@emotion/react';
import { FC, useEffect } from 'react';

type postProps = {
  characterId: string | undefined;
  postId: string | undefined;
};

const CommentList: FC<postProps> = ({ characterId, postId }) => {
  const { loading, comments, fetchComments } = useCommentStore();
  useEffect(() => {
    if (characterId && postId) {
      fetchComments(characterId, postId);
    }
  }, [characterId, postId, fetchComments]);

  if (loading) {
    return (
      comments.map(({
        id, comment, createdAt, nickname,
      }) => (
        <Comment
          key={id}
          id={id}
          comment={comment}
          createdAt={createdAt}
          nickname={nickname}
        />
      ))
    );
  }
  return (
    <Loading />
  );
};
export default CommentList;

const Comment: FC<CommentProps> = ({
  comment, createdAt, nickname,
}) => (
  <div css={css`width:100%;`}>
    <div css={contentWrapperCSS}>
      <div css={nicknameCSS}>{nickname}</div>
      <div css={dateCSS}>신고</div>
    </div>
    <div css={contentWrapperCSS}>
      <div css={contentCSS}>{comment}</div>
      <div css={dateCSS}>{postDetailDateParse(createdAt)}</div>
    </div>
    <div css={lineCSS} />

  </div>
);

const nicknameCSS = css`
  font-size: 0.8rem;
  font-weight:bold;
  color:${color.black};
  padding: 0.3rem 0;
`;

const contentWrapperCSS = css`
  display: flex;
  justify-content: space-between;
`;

const contentCSS = css`
  font-size: 0.75rem;
  color:${color.gray};
`;

const dateCSS = css`
  font-size: 0.625rem;
  color:${color.gray};
`;

const lineCSS = css`
  display: block;
  height: 1px;
  width: 100%;
  background: ${color.lightGray};
  margin: 0.3rem 0;
`;
