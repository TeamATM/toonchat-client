import color from '@/styles/color';
import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode
}

const SectionTitle:FC<SectionTitleProps> = ({ children }) => (
  <div css={titleCSS}>{children}</div>
);

export default SectionTitle;

const titleCSS = css`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${color.greenGray};
`;
