import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
import LinkWrapper from '@/components/common/link/LinkWrapper';

interface FriendProps {
  children: ReactNode,
  linkUrl: string,
}

const FriendWrapper: FC<FriendProps> = ({
  children, linkUrl,
}) => (
  <LinkWrapper linkUrl={linkUrl}>
    <div css={friendCSS}>
      {children}
    </div>
  </LinkWrapper>
);

export default FriendWrapper;

const friendCSS = css`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding: 0.25rem 0;
`;
