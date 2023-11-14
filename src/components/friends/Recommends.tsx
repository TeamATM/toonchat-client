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
        const index1 = Math.floor(Math.random() * data.length);
        let index2 = Math.floor(Math.random() * data.length);
        // 중복 방지
        while (index1 === index2) {
          index2 = Math.floor(Math.random() * data.length);
        }

        setCharacterInfoList([data[index1], data[index2]]);
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
