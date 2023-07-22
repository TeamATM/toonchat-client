import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

type titleUnderLineTextProps = {
  children: ReactNode
}

const TitleUnderLineText: FC<titleUnderLineTextProps> = ({ children }) => (
  <span css={underLineCSS}>{ children }</span>
);

export default TitleUnderLineText;

const underLineCSS = css`
  background: linear-gradient(to top, ${color.whiteGreen} 50%, transparent 50%)
`;
