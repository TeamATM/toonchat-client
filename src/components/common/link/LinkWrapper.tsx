import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface LinkWrapperProps {
  children: ReactNode,
  linkUrl: string,
}

const LinkWrapper: FC<LinkWrapperProps> = ({ linkUrl, children }) => (
  <Link href={linkUrl} passHref legacyBehavior>
    <ResetLink>
      {children}
    </ResetLink>
  </Link>
);

export default LinkWrapper;

const ResetLink = styled.a`
  font-size: 0.75rem;
  text-decoration: none;

  &:active {
    text-decoration: none;
  }
`;
