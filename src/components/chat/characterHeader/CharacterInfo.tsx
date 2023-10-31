import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { FC } from 'react';
import color from '@/styles/color';

interface CharacterInfoProps {
  characterName: string,
  hashTag: string,
  profileImageUrl: string,
  link: string,
}

const CharacterInfo: FC<CharacterInfoProps> = ({
  characterName, hashTag, profileImageUrl, link,
}) => (
  <>
    <Link href={link}>
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
        src={profileImageUrl}
        css={imageCSS}
        alt={`/${characterName}`}
        fill
      />
    </div>
    <div css={textWrapperCSS}>
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

const textWrapperCSS = css`
  padding: 0.25rem;
`;

const characterNameCSS = css`
  text-align: left;
  font-size: 1rem;
  color: ${color.black};
  margin-bottom: 0.25rem;
`;

const characterBackgroundCSS = css`
  font-size: 0.75rem;
  color: ${color.greenGray};
  overflow: hidden;  // 넘치면 영역을 감추기
  text-overflow: ellipsis; // ... 으로 마무리
  white-space: nowrap; // 아래줄로 내려가는 것을 막기
  max-width: 10rem;
`;
