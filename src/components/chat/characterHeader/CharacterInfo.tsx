import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import color from '@/styles/color';
import { FC } from 'react';

interface CharacterInfoProps {
  characterName: string,
  hashTag: string,
  imageUrl: string,
}

const CharacterInfo: FC<CharacterInfoProps> = ({ characterName, hashTag, imageUrl }) => (
  <>
    <Link href="/chats">
      <div css={backWrapperCSS}>
        <Image
          src="/back.svg"
          alt="back"
          css={imageCSS}
          fill
          priority
        />
      </div>
    </Link>
    <div css={imageWrapperCSS}>
      <Image
        src={imageUrl}
        css={imageCSS}
        alt={`/${characterName}`}
        fill
      />
    </div>
    <div>
      <div css={characterNameCSS}>{characterName}</div>
      <div css={characterBackgroundCSS}>{hashTag}</div>
    </div>
  </>
);

export default CharacterInfo;

const backWrapperCSS = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  margin: 0.25rem;
`;

const imageWrapperCSS = css`
  width: 2.75rem;
  height: 2.75rem;
  position: relative;
`;

const imageCSS = css`
  border-radius: 50%;
`;

const characterNameCSS = css`
  text-align: left;
  font-size: 1rem;
  color: ${color.black};
`;

const characterBackgroundCSS = css`
  font-size: 0.75rem;
  color: ${color.greenGray};
`;
