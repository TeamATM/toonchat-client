import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { CharacterInfo } from '@/types/characterInfo';
import { findAllCharacters } from '@/utils/api/character';
import Loading from '../common/dialog/Loading';
import FriendInfo from '../friends/friend/FriendInfo';
import FriendWrapper from '../friends/friend/FriendWrapper';
import FriendSkeleton from '../friends/friend/FriendSkeleton';

const BoardList = () => {
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
      <section css={boardListWrapperCSS}>
        <FriendSkeleton />
      </section>
    );
  }

  return (
    <section css={boardListWrapperCSS}>
      {characterInfoList ? (
        characterInfoList.map((characterInfo) => (
          <div key={characterInfo.characterId}>
            <FriendWrapper
              key={characterInfo.characterId}
              linkUrl={`/community/${characterInfo.characterId}`}
            >
              <FriendInfo
                characterName={`${characterInfo.characterName} 게시판`}
                message={characterInfo.hashTag}
                profileImageUrl={characterInfo.profileImageUrl}
              />
            </FriendWrapper>
          </div>
        ))
      ) : <Loading />}
    </section>
  );
};

export default BoardList;

const boardListWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 0.375rem;
  padding-top: 1.25rem;
`;
