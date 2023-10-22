import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { CharacterInfo } from '@/types/characterInfo';
import { findAllCharacters } from '@/utils/api/character';
import FriendWrapper from './friend/FriendWrapper';
import FriendHashTag from './friend/FriendHashTag';
import FriendInfo from './friend/FriendInfo';

const Friends = () => {
  const [characterInfoList, setCharacterInfoList] = useState<CharacterInfo[]>([]);

  useEffect(() => {
    findAllCharacters()
      .then((data) => {
        setCharacterInfoList(data);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, []);

  return (
    <section css={friendsWrapperCSS}>
      {characterInfoList.map((characterInfo, index) => (
        // TODO: 여러 캐릭터가 있을 때 스크롤이 가능한지 확인하기 위함
        <FriendWrapper
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          linkUrl={`/profile/friends/${characterInfo.characterId}`}
        >
          <FriendInfo
            characterName={characterInfo.characterName}
            message={characterInfo.statusMessage}
            profileImageUrl={characterInfo.profileImageUrl}
          />
          <FriendHashTag hashTag={characterInfo.hashTag} />
        </FriendWrapper>
      ))}
    </section>
  );
};

export default Friends;

const friendsWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 0.375rem;
`;
