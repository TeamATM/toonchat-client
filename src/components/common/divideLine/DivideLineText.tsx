import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
import color from '@/styles/color';

interface DivideLineTextProps {
  children: ReactNode
}

const DivideLineText:FC <DivideLineTextProps> = ({ children }) => (
  <div css={lineContainerCSS}>
    <div css={lineCSS} />
    <div>{children}</div>
    <div css={lineCSS} />
  </div>
);

export default DivideLineText;

const lineContainerCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.875rem;
  width: 100%;
  color:  ${color.lightGray};
  font-size: 0.875rem;
`;

const lineCSS = css`
  display: block;
  margin: 0.625rem;
  height: 1px;
  background: ${color.lightGray};
  width: 100%;
`;
