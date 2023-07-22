import color from '@/styles/color';
import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';

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
  width: 100%;
  color:  ${color.lightGray};
  font-size: 14px;
`;

const lineCSS = css`
  display: block;
  margin: 10px;
  height: 1px;
  background: ${color.lightGray};
  width: 100%;
`;
