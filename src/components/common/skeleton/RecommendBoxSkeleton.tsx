import { loadingCSS } from '@/styles/GlobalStyles';
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
  ${loadingCSS}
`;

const characterNameCSS = css`
  width: 5rem;
  height: 1rem;
  border-radius: 1rem;
  ${loadingCSS};
`;

const hashTagCSS = css`
  height: 0.75rem;
  margin: 0.375rem;
  width: 8rem;
  border-radius: 0.75rem;
  ${loadingCSS}
`;

const statusMessageCSS = css`
  color: ${color.greenGray};
  height: 0.875rem;
  width: 8rem;
  margin: 0.375rem;
  border-radius: 0.875rem;

  ${loadingCSS}
`;
