import { css } from '@emotion/react';

const FriendSkeleton = () => (
  <>
    <SingleSkeleton />
    <SingleSkeleton />
  </>
);

export default FriendSkeleton;

const SingleSkeleton = () => (
  <div css={friendCSS}>
    <div css={imageWrapperCSS} />
    <div css={textWrapperCSS}>
      <div css={characterNameCSS} />
      <div css={messageCSS} />
    </div>
  </div>
);

const load = css`
  @keyframes loading {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 480px;
    }
  }

  animation: loading 10s infinite;
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);

  background-size: 200% 100%;
`;

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
  ${load};
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
  ${load};
`;

const messageCSS = css`
  width: 15rem;
  height: 0.75rem;
  border-radius: 0.75rem;
  ${load};
`;