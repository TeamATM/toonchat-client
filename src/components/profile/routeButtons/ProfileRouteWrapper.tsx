import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
import LinkWrapper from '@/components/common/link/LinkWrapper';

interface ProfileRouteWrapperProps {
  children: ReactNode,
  linkUrl: string,
  color: string,
}

const ProfileRouteWrapper: FC<ProfileRouteWrapperProps> = ({ children, linkUrl, color }) => (
  <LinkWrapper linkUrl={linkUrl}>
    <div css={WrapperCSS(color)}>
      {children}
    </div>
  </LinkWrapper>
);

export default ProfileRouteWrapper;

const WrapperCSS = (color: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: ${color};
`;
