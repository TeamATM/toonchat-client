import { loadingCSS } from '@/styles/GlobalStyles';
import { css } from '@emotion/react';

const SkeletonList = () => (
  <>
    <SingleSkeleton />
    <SingleSkeleton />
  </>
);

export default SkeletonList;

const SingleSkeleton = () => (
  <div css={friendCSS}>
    <div css={imageWrapperCSS} />
    <div css={textWrapperCSS}>
      <div css={characterNameCSS} />
      <div css={messageCSS} />
    </div>
  </div>
);

const friendCSS = css`
  display:flex;
  flex-direction:row;
  align-items:center;
`;

const imageWrapperCSS = css`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin: 0.375rem;
  border-radius: 50%;
  ${loadingCSS};
`;

const textWrapperCSS = css`
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
  gap: 0.25rem;
`;

const characterNameCSS = css`
  padding-bottom: 0.25rem;
  width: 5rem;
  height: 1rem;
  border-radius: 1rem;
  ${loadingCSS};
`;

const messageCSS = css`
  width: 15rem;
  height: 0.75rem;
  border-radius: 0.75rem;
  ${loadingCSS};
`;
