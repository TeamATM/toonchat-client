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
  border-radius: 16px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${color.black};
`;
