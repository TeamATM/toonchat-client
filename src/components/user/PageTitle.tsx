import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

type pageTitleProps = {
  children: ReactNode
}

const PageTitle: FC<pageTitleProps> = ({ children }) => (
  <div css={textCSS}>{children}</div>
);

export default PageTitle;

const textCSS = css`
  margin: auto;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${color.black};
`;
