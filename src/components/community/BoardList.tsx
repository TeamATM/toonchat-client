import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { CharacterInfo } from '@/types/characterInfo';
import { findAllBoards } from '@/utils/api/boards';
import Loading from '../common/dialog/Loading';
import FriendInfo from '../friends/friend/FriendInfo';
import FriendWrapper from '../friends/friend/FriendWrapper';

const BoardList = () => {
  const [characterInfoList, setCharacterInfoList] = useState<CharacterInfo[]>([]);
  console.log(characterInfoList);

  useEffect(() => {
    findAllBoards()
      .then((data) => setCharacterInfoList(data))
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, []);

  return (
    <section css={boardListWrapperCSS}>
      {characterInfoList ? (
        characterInfoList.map((characterInfo) => (
          <div key={characterInfo.id}>
            <FriendWrapper
              key={characterInfo.characterId}
              linkUrl={`/community/${characterInfo.characterId}`}
            >
              <FriendInfo
                characterName={characterInfo.name}
                // TODO: 백엔드는 이미지를 뿌려라!
                // imageUrl={characterInfo.profileUrl}
                message={`임시 정보 입니다. ${characterInfo.hashtags}`}
                imageUrl="/leeyj.png"
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
