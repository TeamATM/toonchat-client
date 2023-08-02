import color from '@/styles/color';
import { css } from '@emotion/react';
import { FC } from 'react';

interface FriendHashTagProps {
  hashTag: string
}

const FriendHashTag:FC<FriendHashTagProps> = ({ hashTag }) => (
  <div css={hashTagCSS}>{hashTag}</div>
);

export default FriendHashTag;

const hashTagCSS = css`
  font-size: 0.75rem;
  color:${color.greenGray};
  width: 6.25rem;
  margin-right:0.625rem;
`;
