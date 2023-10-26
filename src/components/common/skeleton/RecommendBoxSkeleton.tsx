import color from '@/styles/color';
import { css } from '@emotion/react';

const RecommendBoxSkeleton = () => (
  <div css={recommendsCSS}>
    <SingleSkeleton />
    <SingleSkeleton />
  </div>
);

export default RecommendBoxSkeleton;

const SingleSkeleton = () => (
  <div css={boxCSS}>
    <div css={imageWrapperCSS} />
    <div css={characterNameCSS} />
    <div css={hashTagCSS} />
    <div css={statusMessageCSS} />
  </div>
);

const recommendsCSS = css`
  width:100%;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
`;

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
  background: linear-gradient(
    to right,
    rgba(246, 247, 248, 0.8), rgba(204, 207, 208, 0.7) 50%, rgba(246, 247, 248, 0.8) 100%
  );
  background-size: 200% 100%;
`;

const boxCSS = css`
  margin: 0.5rem;
  padding: 1rem;
  height: 12.5rem;
  background-color: ${color.whiteGray};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const imageWrapperCSS = css`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin: 0.25rem;
  border-radius: 50%;
  ${load}
`;

const characterNameCSS = css`
  width: 5rem;
  height: 1rem;
  border-radius: 1rem;
  ${load};
`;

const hashTagCSS = css`
  height: 0.75rem;
  margin: 0.375rem;
  width: 8rem;
  border-radius: 0.75rem;
  ${load}
`;

const statusMessageCSS = css`
  color: ${color.greenGray};
  height: 0.875rem;
  width: 8rem;
  margin: 0.375rem;
  border-radius: 0.875rem;

  ${load}
`;
