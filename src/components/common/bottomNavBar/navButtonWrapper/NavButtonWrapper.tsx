import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
import LinkWrapper from '@/components/common/link/LinkWrapper';

interface NavButtonWrapperProps {
  children: ReactNode,
  linkUrl: string,
  color: string,
}

const NavButtonWrapper: FC<NavButtonWrapperProps> = ({ children, linkUrl, color }) => (
  <LinkWrapper linkUrl={linkUrl}>
    <div css={WrapperCSS(color)}>
      {children}
    </div>
  </LinkWrapper>
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
