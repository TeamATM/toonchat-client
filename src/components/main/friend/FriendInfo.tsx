import Image from 'next/image';
import { css } from '@emotion/react';
import { FC } from 'react';
import color from '@/styles/color';

interface FriendInfoProps {
  characterName: string,
  message: string,
  imageUrl: string,
}

const FriendInfo: FC<FriendInfoProps> = ({ characterName, message, imageUrl }) => (
  <div css={css`display:flex; flex-direction:row;`}>
    <Image
      src={imageUrl}
      width={48}
      height={48}
      alt={characterName}
      style={imageStyle}
      priority
    />
    <div css={css`display:flex; flex-direction:column; align-items:start; justify-content:center;`}>
      <div css={characterNameCSS}>{characterName}</div>
      <div css={messageCSS}>{message}</div>
    </div>
  </div>
);

export default FriendInfo;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};

const characterNameCSS = css`
  font-size:16px;
  font-weight:bold;
  padding-bottom:4px;
  color:${color.black};
`;

const messageCSS = css`
  font-size: 12px;
  color:${color.greenGray};
`;
