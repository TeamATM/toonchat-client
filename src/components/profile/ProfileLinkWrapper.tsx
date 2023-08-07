import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ProfileLinkWrapperProps {
  children: ReactNode,
  linkUrl: string,
  color: string,
}

const ProfileLinkWrapper: FC<ProfileLinkWrapperProps> = ({ children, linkUrl, color }) => (
  <Link href={linkUrl} passHref legacyBehavior>
    <ResetLink>
      <div css={WrapperCSS(color)}>
        {children}
      </div>
    </ResetLink>
  </Link>
);

export default ProfileLinkWrapper;

const WrapperCSS = (color: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: ${color};
`;

const ResetLink = styled.a`
  text-decoration: none;

  &:active {
    text-decoration: none;
  }
`;
