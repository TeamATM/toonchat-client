import { FC, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useSocketStore from '@/store/socket';
import useChatStore from '@/store/chat';
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
  const { connect, setChatStore } = useSocketStore();
  const chatStore = useChatStore();
  useEffect(() => {
    fetch(`/api/userStatus/${characterId}`)
      .then((res) => res.json())
      .then((data) => { setUserStatus(data); });

    // WebSocket 연결하는 부분
    // TODO: /chat 페이지가 생기면 거기로 옮기는게 좋아보임
    //        root페이지에 넣기에는 이후 로그인 기능이 완성되면
    //        인증정보까지 같이 보내 연결해야 하기에 좋지 않음
    connect();
    setChatStore(chatStore);
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
