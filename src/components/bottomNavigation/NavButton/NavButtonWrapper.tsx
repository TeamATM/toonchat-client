import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface NavButtonWrapperProps {
  children: ReactNode,
  linkUrl: string,
  color: string,
}

const NavButtonWrapper: FC<NavButtonWrapperProps> = ({ children, linkUrl, color }) => (
  <Link href={linkUrl} passHref legacyBehavior>
    <ResetLink>
      <div css={WrapperCSS(color)}>
        {children}
      </div>
    </ResetLink>
  </Link>
);

export default NavButtonWrapper;

const WrapperCSS = (color: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  gap: 4px;
  color: ${color};
`;

const ResetLink = styled.a`
  font-size: 14px;
  text-decoration: none;

  &:active {
    text-decoration: none;
  }
`;
