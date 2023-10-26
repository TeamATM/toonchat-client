import { css } from '@emotion/react';
import { findAllCharacters } from '@/utils/api/character';
import { CharacterInfo } from '@/types/characterInfo';
import { useEffect, useState } from 'react';
import RecommendBox from './recommend/RecommendBox';
import RecommendBoxSkeleton from '../common/skeleton/RecommendBoxSkeleton';

const Recommends = () => {
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
      <RecommendBoxSkeleton />
    );
  }

  return (
    <div css={recommendsCSS}>
      {characterInfoList.map((characterInfo) => (
        <RecommendBox
          key={characterInfo.characterId}
          characterName={characterInfo.characterName}
          characterId={characterInfo.characterId}
          hashTag={characterInfo.hashTag}
          statusMessage={characterInfo.statusMessage}
          profileImageUrl={characterInfo.profileImageUrl}
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
