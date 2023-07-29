import { css } from '@emotion/react';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface NavButtonWrapperProps {
  children: ReactNode,
  linkUrl: string
}

const NavButtonWrapper: FC<NavButtonWrapperProps> = ({ children, linkUrl }) => (
  <Link href={linkUrl}>
    <div css={WrapperCSS}>
      {children}
    </div>
  </Link>
);

export default NavButtonWrapper;

const WrapperCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
