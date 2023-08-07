import { css } from '@emotion/react';
import Image from 'next/image';
import { FC } from 'react';
import color from '@/styles/color';

interface CharacterProfileInfoProps {
  characterName: string,
  hashTag: string,
  imageUrl: string,
  statusMessage: string,
}

const CharacterProfileInfo: FC<CharacterProfileInfoProps> = ({
  characterName, hashTag, imageUrl, statusMessage,
}) => (
  <div css={profileInfoCSS}>
    <div css={imageWrapperCSS}>
      <Image
        src={imageUrl}
        css={imageCSS}
        alt={`/${characterName}`}
        fill
      />
    </div>
    <div css={css`font-size:1.25rem; font-weight:700; padding:0.5rem; color: ${color.black};`}>{characterName}</div>
    <div css={css`font-size:0.875rem; font-weight:bold; color:${color.gray}; padding-top:2rem;`}>{hashTag}</div>
    <div css={css`font-size:1.125rem; font-weight:400; padding:1rem;`}>{statusMessage}</div>
  </div>
);

export default CharacterProfileInfo;

const profileInfoCSS = css`
  display:flex;
  flex-direction:column;
  align-items: center;
`;

const imageWrapperCSS = css`
  width: 5.5rem;
  height: 5.5rem;
  position: relative;
`;

const imageCSS = css`
  border-radius: 50%;
`;
