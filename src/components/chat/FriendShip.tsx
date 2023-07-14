import { css } from '@emotion/react';
import type { FC } from 'react';

interface UserStatusProps {
  friendShipExp: number,
  maxFriendShipExp: number,
  friendShipLv: number,
}

const FriendShip:FC<UserStatusProps> = ({ friendShipExp, maxFriendShipExp, friendShipLv }) => (
  <div
    css={css`
      width: 100%;
      height: 23px;
      text-align: left;
      font-size: 10px;
      color:  #797C7B;
    `}
  >
    <b
      css={css`        
        line-height: 12px;
      `}
    >
      <span>
        <span>친밀도</span>
      </span>
      <span
        css={css`
          font-size: 12px;
          color: #20a090;
        `}
      >
        <span> </span>
        <span>
          Lv.
          {' '}
          {friendShipLv}
        </span>
      </span>
    </b>
    <div
      css={css`
        position: absolute;
        border-top: 4px solid #cdd1d0;
        width: 60px;
        height: 4px;
        opacity: 0.5;
        border-radius: 5px;
      `}
    />
    <div
      css={css`
        position: absolute;
        border-top: 4px solid #20a090;
        width: ${(friendShipExp / maxFriendShipExp) * 60}px;
        height: 4px;
        border-radius: 5px;
      `}
    />
  </div>
);

export default FriendShip;
