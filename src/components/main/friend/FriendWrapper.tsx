import color from '@/styles/color';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FC } from 'react';
import FriendInfo from './FriendInfo';
import FriendHashTag from './FriendHashTag';

interface FriendProps {
  characterName: string,
  characterId: string,
  hashTag: string,
  statusMessage: string,
  imageUrl: string,
}

const FriendWrapper: FC<FriendProps> = ({
  characterName, characterId, hashTag, statusMessage, imageUrl,
}) => (
  <Link href={`/chat/${characterId}`} passHref legacyBehavior>
    <ResetLink>
      <div css={friendCSS}>
        <FriendInfo characterName={characterName} message={statusMessage} imageUrl={imageUrl} />
        <FriendHashTag hashTag={hashTag} />
      </div>
    </ResetLink>
  </Link>
);

export default FriendWrapper;

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

const friendCSS = css`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding: 5px 0;
`;
