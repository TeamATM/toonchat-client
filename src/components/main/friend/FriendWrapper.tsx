import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import color from '@/styles/color';

interface FriendProps {
  children: ReactNode,
  linkUrl: string,
}

const FriendWrapper: FC<FriendProps> = ({
  children, linkUrl,
}) => (
  <Link href={linkUrl} passHref legacyBehavior>
    <ResetLink>
      <div css={friendCSS}>
        {children}
      </div>
    </ResetLink>
  </Link>
);

export default FriendWrapper;

const ResetLink = styled.a`
  text-decoration: none;

  &:active {
    text-decoration: none;
    background-color: ${color.offWhite};
  }

  &:hover {
    text-decoration: none;
    background-color: ${color.offWhite};
  }
`;

const friendCSS = css`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding: 0.25rem 0;
`;
