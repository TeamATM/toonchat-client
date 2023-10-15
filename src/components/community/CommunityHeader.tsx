import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';
import { useRouter } from 'next/router';
import { findCharacterById } from '@/utils/api/character';
import { CharacterInfo as CharacterInfoType } from '@/types/characterInfo';
import SearchBar from '@/components/common/searchBar/SearchBar';
import CharacterInfo from '@/components/chat/characterHeader/CharacterInfo';
import Loading from '../common/dialog/Loading';

const CommunityHeader = () => {
  // TODO: 친밀도를 API로 받아와야 작업이 가능함!
  const router = useRouter();
  const { character_id: characterId } = router.query;
  const [characterInfo, setCharacterInfo] = useState<CharacterInfoType>();
  useEffect(() => {
    if (characterId && typeof characterId === 'string') {
      findCharacterById(characterId)
        .then((data) => setCharacterInfo(data))
        .catch((error) => {
          console.error('Error fetching post:', error);
        });
    }
  }, [characterId]);
  return (
    <header css={headerCSS}>
      {/* TODO: 캐릭터의 정보, 이미지가 필요합니다. */}
      <span css={characterInfoCSS}>
        {
          characterInfo
            ? (
              <CharacterInfo
                imageUrl="/leeyj.png"
                characterName={characterInfo.name}
                hashTag={characterInfo.hashtags}
                link="/community"
              />
            )
            : <Loading />
        }
      </span>
      <SearchBar />
    </header>
  );
};

export default CommunityHeader;

const headerCSS = css`
  position: sticky;
  top: 0;
  z-index: 100; // 채팅보다 위에 존재해야하기 때문에 필요함
  width: 100%;
  max-width: 400px;
  padding-left: 1.25rem;
  padding-right: 0.6rem;
  padding-top: 0.6rem;  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.white};
`;

const characterInfoCSS = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
