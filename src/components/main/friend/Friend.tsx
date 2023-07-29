import color from '@/styles/color';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface FriendProps {
  characterName: string,
  characterId: string,
  hashTag: string,
  statusMessage: string,
  imageUrl: string,
}

const Friend: FC<FriendProps> = ({
  characterName, characterId, hashTag, statusMessage, imageUrl,
}) => (
  <Link href={`/chat/${characterId}`} passHref legacyBehavior>
    <ResetLink>
      <div css={css`display:flex; flex-direction:row; align-items:center; justify-content:space-between;`}>
        <div css={css`display:flex; flex-direction:row;`}>
          <Image
            src={imageUrl}
            width={52}
            height={52}
            alt={characterName}
            style={imageStyle}
            priority
          />
          <div css={css`display:flex; flex-direction:column; align-items:start; justify-content:center;`}>
            <div css={css`font-size:16px; font-weight:bold; padding-bottom:4px; color:${color.black};`}>{characterName}</div>
            <div css={css`font-size: 12px; color:${color.greenGray};`}>{statusMessage}</div>
          </div>
        </div>
        <div css={css`font-size: 12px; color:${color.greenGray}; width:100px; margin-right:10px;`}>{hashTag}</div>
      </div>
    </ResetLink>
  </Link>
);

export default Friend;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};

const ResetLink = styled.a`
  text-decoration: none;

  &:active {
    text-decoration: none;
    background-color: ${color.offWhite};
  }

  &:hover {
    text-decoration: none;
    background-color: ${color.offWhite};
  }
`;
