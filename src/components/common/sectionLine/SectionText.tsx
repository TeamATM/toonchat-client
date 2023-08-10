import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
import color from '@/styles/color';

interface SectionTextProps {
  children: ReactNode
}

const SectionText:FC<SectionTextProps> = ({ children }) => (
  <div css={titleCSS}>{children}</div>
);

export default SectionText;

const titleCSS = css`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${color.greenGray};
`;
