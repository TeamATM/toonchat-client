import { css } from '@emotion/react';
import { findAllCharacters } from '@/utils/api/character';
import { CharacterInfo } from '@/types/characterInfo';
import { useEffect, useState } from 'react';
import RecommendBox from './recommend/RecommendBox';

const Recommends = () => {
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
    <div css={recommendsCSS}>
      {characterInfoList.map((characterInfo) => (
        <RecommendBox
          key={characterInfo.characterId}
          characterName={characterInfo.characterName}
          characterId={characterInfo.characterId}
          hashTag={characterInfo.hashTag}
          statusMessage={characterInfo.statusMessage}
          imageUrl={characterInfo.profileImageUrl}
        />
      ))}
    </div>
  );
};
export default Recommends;

const recommendsCSS = css`
  width:100%;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
`;
