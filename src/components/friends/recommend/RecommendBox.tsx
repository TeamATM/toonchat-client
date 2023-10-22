import { css } from '@emotion/react';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import color from '@/styles/color';
import { CharacterInfo } from '@/types/characterInfo';

const RecommendBox:FC<CharacterInfo> = ({
  characterName, characterId, hashTag, statusMessage, imageUrl,
}) => (
  <Link href={`/profile/friends/${characterId}`} passHref legacyBehavior>
    <ResetLink>
      <div css={boxCSS}>
        <div css={imageWrapperCSS}>
          <Image
            src={imageUrl}
            alt={characterName}
            css={imageCSS}
            fill
            priority
          />
        </div>
        <div css={characterNameCSS}>{characterName}</div>
        <div css={hashTagCSS}>{hashTag}</div>
        <div css={statusMessageCSS}>{statusMessage}</div>
      </div>
    </ResetLink>
  </Link>
);

export default RecommendBox;

const ResetLink = styled.a`
  text-decoration: none;

  &:active {
    text-decoration: none;
  }
`;

const boxCSS = css`
  margin: 0.5rem;
  padding: 1rem;
  height: 12.5rem;
  background-color: ${color.whiteGray};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: keep-all;

  &:hover {
    background-color: ${color.offWhite};
  }

  &:active {
    background-color: ${color.offWhite};
  }
`;

const imageWrapperCSS = css`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin: 0.25rem;
`;

const imageCSS = css`
  border-radius: 50%;
`;

const characterNameCSS = css`
  color: ${color.black};
  font-size: 1rem;
  font-weight: 700;
`;

const hashTagCSS = css`
  color: ${color.greenGray};
  font-size: 0.75rem;
  padding: 0.375rem;
  text-align: center;
`;

const statusMessageCSS = css`
  color: ${color.greenGray};
  font-size: 0.875rem;
  padding: 0.375rem;
  text-align: center;
`;
