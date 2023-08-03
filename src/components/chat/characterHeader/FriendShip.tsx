import color from '@/styles/color';
import { css } from '@emotion/react';
import type { FC } from 'react';

interface UserStatusProps {
  friendShipExp: number,
  maxFriendShipExp: number,
  friendShipLv: number,
}

const FriendShip:FC<UserStatusProps> = ({ friendShipExp, maxFriendShipExp, friendShipLv }) => (
  <div
    css={FriendShipCSS}
  >
    <div css={friendShipTextAreaCSS}>
      <div css={css`padding-right: 0.25rem;`}>친밀도</div>
      <span css={css`font-size: 0.75rem; color: ${color.greenGray}`}>
        {`Lv. ${friendShipLv}`}
      </span>
    </div>
    <div css={expBarAreaCSS}>
      <div
        css={maxExpBarCSS(friendShipExp, maxFriendShipExp)}
      />
      <div
        css={expBarCSS(friendShipExp, maxFriendShipExp)}
      />
    </div>
  </div>
);

export default FriendShip;

const FriendShipCSS = css`
  height: 1.5rem;
  text-align: left;
  font-size: 0.625rem;
  color:  ${color.greenGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const friendShipTextAreaCSS = css`
display:flex;
align-items: center;
`;

const expBarAreaCSS = css`
  display: flex;
  padding: 0.25rem;
`;

const maxExpBarCSS = (friendShipExp : number, maxFriendShipExp : number) => css`
border-top: 0.25rem solid #cdd1d0;
width: ${(1 - (friendShipExp / maxFriendShipExp)) * 3.75}rem;
height: 0.25rem;
opacity: 0.5;
border-radius: 0.25rem;
`;

const expBarCSS = (friendShipExp : number, maxFriendShipExp : number) => css`
border-top: 0.25rem solid ${color.lightGreen};
width: ${(friendShipExp / maxFriendShipExp) * 3.75}rem;
height: 0.25rem;
border-radius: 0.25rem;
`;
