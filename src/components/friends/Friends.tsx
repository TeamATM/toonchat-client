import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { CharacterInfo } from '@/types/characterInfo';
import { findAllCharacters } from '@/utils/api/character';
import FriendWrapper from './friend/FriendWrapper';
import FriendHashTag from './friend/FriendHashTag';
import FriendInfo from './friend/FriendInfo';
import SkeletonList from '../common/skeleton/SkeletonList';

const Friends = () => {
  const [characterInfoList, setCharacterInfoList] = useState<CharacterInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    findAllCharacters()
      .then((data) => {
        setCharacterInfoList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, []);
  if (loading) {
    return (
      <section css={friendsWrapperCSS}>
        <SkeletonList />
      </section>
    );
  }
  return (
    <section css={friendsWrapperCSS}>
      {characterInfoList.map((characterInfo) => (
        <FriendWrapper
          key={characterInfo.characterId}
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
