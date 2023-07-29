import color from '@/styles/color';
import { css } from '@emotion/react';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

interface CharacterProps {
  characterName: string,
  characterId: string,
  hashTag: string,
  statusMessage: string,
  imageUrl: string,
}

const RecommendBox:FC<CharacterProps> = ({
  characterName, characterId, hashTag, statusMessage, imageUrl,
}) => (
  <Link href={`/chat/${characterId}`} passHref legacyBehavior>
    <ResetLink>
      <div css={boxCSS}>
        <Image
          src={imageUrl}
          alt={characterName}
          width={56}
          height={56}
          style={imageStyle}
          priority
        />
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
  margin: 8px;
  padding: 16px;
  height: 200px;
  background-color: ${color.whiteGray};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: keep-all;
`;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};

const characterNameCSS = css`
  color: ${color.black};
  font-size: 16px;
  font-weight: 700;
`;

const hashTagCSS = css`
  color: ${color.greenGray};
  font-size: 12px;
  padding: 6px;
  text-align: center;
`;

const statusMessageCSS = css`
  color: ${color.greenGray};
  font-size: 14px;
  padding: 6px;
  text-align: center;
`;
