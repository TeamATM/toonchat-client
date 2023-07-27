import { FC, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import FriendShip from './characterHeader/FriendShip';
import CharacterInfo from './characterHeader/CharacterInfo';

interface CharacterState {
  characterId: string,
  characterName: string,
  hashTag: string,
  imageUrl: string,
}

// TODO: Back 버튼을 누르면 지금 홈으로 돌아가지만 채팅 리스트뷰가 완성되면 그쪽으로 Link 될 예정
const Header : FC<CharacterState> = ({
  characterId, characterName, hashTag, imageUrl,
}) => {
  // TODO: 친밀도를 API로 받아와야 작업이 가능함!
  const [userStatus, setUserStatus] = useState({
    friendShipExp: 0, maxFriendShipExp: 1, friendShipLv: 0,
  });
  useEffect(() => {
    fetch(`/api/userStatusTo${characterId}`)
      .then((res) => res.json())
      .then((data) => { setUserStatus(data); });
  }, []);

  return (
    <header css={headerCSS}>
      <CharacterInfo imageUrl={imageUrl} characterName={characterName} hashTag={hashTag} />
      <FriendShip
        friendShipExp={userStatus.friendShipExp}
        maxFriendShipExp={userStatus.maxFriendShipExp}
        friendShipLv={userStatus.friendShipLv}
      />
    </header>
  );
};

export default Header;

const headerCSS = css`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
