import color from '@/styles/color';
import { css } from '@emotion/react';

const DivideLine = () => (
  <div css={lineContainerCSS}>
    <div css={lineCSS} />
  </div>
);

export default DivideLine;

const lineContainerCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color:  ${color.lightGray};
  font-size: 0.875rem;
`;

const lineCSS = css`
  display: block;
  margin: 0.625rem;
  margin-bottom: 2.5rem;
  height: 1px;
  background: ${color.lightGray};
  width: 100%;
`;
