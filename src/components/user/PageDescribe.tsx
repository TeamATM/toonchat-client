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
  margin: auto;
  padding: 16px;
  border-radius: 16px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: ${color.greenGray};
`;
