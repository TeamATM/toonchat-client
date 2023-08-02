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
  font-size: 0.875rem;
  gap: 0.25rem;
  color: ${color};
`;

const ResetLink = styled.a`
  font-size: 0.75rem;
  text-decoration: none;

  &:active {
    text-decoration: none;
  }
`;
