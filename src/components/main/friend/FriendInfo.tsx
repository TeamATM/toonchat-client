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
    <div css={imageWrapperCSS}>
      <Image
        src={imageUrl}
        alt={characterName}
        css={imageCSS}
        fill
        priority
      />
    </div>
    <div css={textWrapperCSS}>
      <div css={characterNameCSS}>{characterName}</div>
      <div css={messageCSS}>{message}</div>
    </div>
  </div>
);

export default FriendInfo;

const imageWrapperCSS = css`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin: 0.375rem;
`;

const imageCSS = css`
  border-radius: 50%;
`;

const textWrapperCSS = css`
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
  gap: 0.25rem;
`;

const characterNameCSS = css`
  font-size: 1rem;
  font-weight:bold;
  padding-bottom: 0.25rem;
  color:${color.black};
`;

const messageCSS = css`
  font-size: 0.75rem;
  color:${color.greenGray};
`;
