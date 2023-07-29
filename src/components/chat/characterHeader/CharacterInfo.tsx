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
    <Link href="/chat">
      <Image
        src="/back.svg"
        alt="back"
        width={24}
        height={24}
        priority
      />
    </Link>
    <Image
      src={imageUrl}
      width={44}
      height={44}
      style={imageStyle}
      alt={`/${characterName}`}
    />
    <div>
      <div css={characterNameCSS}>{characterName}</div>
      <div css={characterBackgroundCSS}>{hashTag}</div>
    </div>
  </>
);

export default CharacterInfo;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};

const characterNameCSS = css`
  text-align: left;
  font-size: 16px;
  color: ${color.black};
`;

const characterBackgroundCSS = css`
  font-size: 12px;
  color: ${color.greenGray};
`;
