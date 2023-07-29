import color from '@/styles/color';
import { css } from '@emotion/react';
import Image from 'next/image';

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

const Friends = () => (
  <section css={friendsWrapperCSS}>
    {characterDataSet.map((data) => (
      <div key={data.characterId} css={css`display:flex; flex-direction:row; align-items:center; justify-content:space-between;`}>
        <div css={css`display:flex; flex-direction:row;`}>
          <Image
            src={data.imageUrl}
            width={52}
            height={52}
            alt={data.characterName}
            style={imageStyle}
            priority
          />
          <div css={css`display:flex; flex-direction:column; align-items:start; justify-content:center;`}>
            <div css={css`font-size:16px; font-weight:bold; padding-bottom:4px; color:${color.black};`}>{data.characterName}</div>
            <div css={css`font-size: 12px; color:${color.greenGray};`}>{data.statusMessage}</div>
          </div>
        </div>
        <div css={css`font-size: 12px; color:${color.greenGray}; width:100px; margin-right:10px;`}>{data.hashTag}</div>
      </div>
    ))}
  </section>
);

export default Friends;

const friendsWrapperCSS = css`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  padding: 6px;
`;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};
