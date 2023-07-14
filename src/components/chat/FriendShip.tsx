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
      <div css={css`padding-right: 5px;`}>친밀도</div>
      <span css={css`font-size: 12px; color: #20a090;`}>
        Lv.
        {' '}
        {friendShipLv}
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
  height: 23px;
  text-align: left;
  font-size: 10px;
  color:  #797C7B;
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
  padding:5px;
`;

const maxExpBarCSS = (friendShipExp : number, maxFriendShipExp : number) => css`
border-top: 4px solid #cdd1d0;
width: ${(1 - (friendShipExp / maxFriendShipExp)) * 60}px;
height: 4px;
opacity: 0.5;
border-radius: 5px;
`;

const expBarCSS = (friendShipExp : number, maxFriendShipExp : number) => css`
border-top: 4px solid #20a090;
width: ${(friendShipExp / maxFriendShipExp) * 60}px;
height: 4px;
border-radius: 5px;
`;
