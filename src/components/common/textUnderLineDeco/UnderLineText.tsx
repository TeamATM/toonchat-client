import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

type underLineTextProps = {
  children: ReactNode
}

const UnderLineText: FC<underLineTextProps> = ({ children }) => (
  <span css={underLineCSS}>{ children }</span>
);

export default UnderLineText;

const underLineCSS = css`
  background: linear-gradient(to top, ${color.whiteGreen} 50%, transparent 50%)
`;
