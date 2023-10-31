import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

type pageDescribeProps = {
  children: ReactNode
}

const PageDescribe: FC<pageDescribeProps> = ({ children }) => (
  <div css={textCSS}>{children}</div>
);

export default PageDescribe;

const textCSS = css`
  width: 80%;
  padding: 1rem;
  margin: auto;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${color.greenGray};
`;
