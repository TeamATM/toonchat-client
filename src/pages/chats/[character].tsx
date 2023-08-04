import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import MessageInput from '@/components/chat/MessageInput';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import ToonChatHead from '@/components/head/ToonChatHead';

interface CharacterProps {
  characterName: string,
  characterId: string,
  hashTag: string,
  imageUrl: string,
}

const Character = ({
  characterProps: {
    characterName, characterId, hashTag, imageUrl,
  },
}
  : { characterProps: CharacterProps }) => (
    <>
      <ToonChatHead title={`대화 with ${characterName}`} />
      <section css={pageCSS}>
        <div>
          <Header
            characterId={characterId}
            imageUrl={imageUrl}
            characterName={characterName}
            hashTag={hashTag}
          />
          <Main characterId={characterId} characterName={characterName} imageUrl={imageUrl} />
        </div>
        <MessageInput characterId={characterId} characterName={characterName} />
      </section>
    </>
);
export default Character;

// TODO: vercel 배포에서 임시API로는 서버사이드 랜더링이
// 잘 안되는 상황이었음. 더미데이터를 여기에서 따로 뽑고 이후 서버 연결하면 지울 예정
const characterDataSet = [
  {
    'bot-name': '이영준',
    'hash-tag': '#카카오페이지 #김비서가왜그럴까',
    'image-url': '/leeyj.png',
  }, {
    'bot-name': '김미소',
    'hash-tag': '#카카오페이지 #김비서가왜그럴까',
    'image-url': '/kimms.png',
  },
];

export const getServerSideProps
:GetServerSideProps<{characterProps:CharacterProps}> = async (context) => {
  const characterId = context.query.character;

  if (Array.isArray(characterId) || !characterId) {
    return {
      notFound: true,
    };
  }
  // TODO: 서버가 구축되면 이 부분을 살릴 예정
  // const res = await fetch(`/api/character/info/${characterId}`);
  // const dataSet = await res.json();

  const idNumber = parseInt(characterId, 10);
  if (Number.isNaN(idNumber) || idNumber < 0 || idNumber >= characterDataSet.length) {
    return {
      notFound: true,
    };
  }
  const dataSet = characterDataSet[idNumber];

  return {
    props: {
      characterProps: {
        characterName: dataSet['bot-name'],
        characterId,
        hashTag: dataSet['hash-tag'],
        imageUrl: dataSet['image-url'],
      },
    },
  };
};

const pageCSS = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  padding-bottom: 0;
`;
