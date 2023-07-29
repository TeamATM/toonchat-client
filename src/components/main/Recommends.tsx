import { css } from '@emotion/react';
import RecommendBox from './recommend/RecommendBox';

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
    statusMessage: '저는 김미소입니다. 조만간 퇴사하려구요 :)',
    imageUrl: '/kimms.png',
  },
];

const Recommends = () => (
  <div css={recommendsCSS}>
    {characterDataSet.map((data) => (
      <RecommendBox
        key={data.characterId}
        characterName={data.characterName}
        characterId={data.characterId}
        hashTag={data.hashTag}
        statusMessage={data.statusMessage}
        imageUrl={data.imageUrl}
      />
    ))}
  </div>
);

export default Recommends;

const recommendsCSS = css`
  width:100%;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
`;
