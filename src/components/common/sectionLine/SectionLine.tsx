import { css } from '@emotion/react';
import color from '@/styles/color';

const SectionLine = () => (
  <div css={lineCSS} />
);

export default SectionLine;

const lineCSS = css`
  height: 1px;
  margin: 0.625rem auto;
  background: ${color.lightGray};
  width: 40%;
`;
