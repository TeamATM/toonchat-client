import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FriendShip from './FriendShip';

// TODO: Back 버튼을 누르면 지금 홈으로 돌아가지만 채팅 리스트뷰가 완성되면 그쪽으로 Link 될 예정
const Header = () => {
  // TODO: 친밀도를 API로 받아와야 작업이 가능함!
  const [userStatus, setUserStatus] = useState({
    friendShipExp: 0, maxFriendShipExp: 0, friendShipLv: 0,
  });
  useEffect(() => {
    fetch('/api/userStatusToLeeyj')
      .then((res) => res.json())
      .then((data) => { setUserStatus(data); });
  }, []);

  return (
    <header>
      <Link href="/">
        <Image
          src="/back.svg"
          alt="back"
          width={24}
          height={24}
          priority
        />
      </Link>
      <Image
        src="/AI.png"
        width={30}
        height={30}
        alt="이영준이될 사진"
      />
      <div>이영준</div>
      <div>#네이버웹툰 #김비서가왜그럴까</div>
      <FriendShip
        friendShipExp={userStatus.friendShipExp}
        maxFriendShipExp={userStatus.maxFriendShipExp}
        friendShipLv={userStatus.friendShipLv}
      />
    </header>
  );
};

export default Header;
