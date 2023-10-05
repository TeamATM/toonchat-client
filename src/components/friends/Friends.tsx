import { css } from '@emotion/react';
import FriendWrapper from './friend/FriendWrapper';
import FriendHashTag from './friend/FriendHashTag';
import FriendInfo from './friend/FriendInfo';

const Friends = () => (
  <section css={friendsWrapperCSS}>
    {characterDataSet.map((data, index) => (
      // TODO: 여러 캐릭터가 있을 때 스크롤이 가능한지 확인하기 위함
      <FriendWrapper
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        linkUrl={`/profile/friends/${data.characterId}`}
      >
        <FriendInfo
          characterName={data.characterName}
          message={data.statusMessage}
          imageUrl={data.imageUrl}
        />
        <FriendHashTag hashTag={data.hashTag} />
      </FriendWrapper>
    ))}
  </section>
);

export default Friends;

const friendsWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 0.375rem;
`;

// TODO: 이 부분은 API에서 떼와야하는 부분
const characterDataSet = [
  {
    characterName: '이영준',
    characterId: '0',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    statusMessage: '난 왜 이렇게 완벽한걸까...',
    imageUrl: '/leeyj.png',

  }, {
    characterName: '김미소',
    characterId: '1',
    hashTag: '#카카오페이지 #김비서가왜그럴까',
    statusMessage: '조만간 퇴사하려구요 :)',
    imageUrl: '/kimms.png',
  },
];
