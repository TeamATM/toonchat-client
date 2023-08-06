import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';

interface CharacterProfileProps {
  characterName: string,
  characterId: string,
  hashTag: string,
  imageUrl: string,
  backgroundImageUrl: string,
  statusMessage: string,
}

const FriendProfile = ({
  characterProfileProps: {
    characterName, characterId, hashTag, imageUrl, backgroundImageUrl, statusMessage,
  },
} : {characterProfileProps: CharacterProfileProps }) => {
  console.log(characterName, characterId, hashTag, imageUrl, backgroundImageUrl, statusMessage);

  return (
    <>
      <ToonChatHead title={`${characterName}의 프로필`} />
      <div css={backgroundCSS(backgroundImageUrl)} />
      <section css={pageCSS}>
        <div>{`캐릭터 이름 : ${characterName}`}</div>
        <div>{`Hash Tag : ${hashTag}`}</div>
        <div>{`상태 메시지 : ${statusMessage}`}</div>
      </section>
    </>
  );
};

export default FriendProfile;

const characterProfileDataSet = [
  {
    'bot-name': '이영준',
    'hash-tag': '#카카오페이지 #김비서가왜그럴까',
    'image-url': '/leeyj.png',
    'background-image-url': '/leeyjback.png',
    'status-message': '난 왜 이렇게 완벽한걸까...',
  }, {
    'bot-name': '김미소',
    'hash-tag': '#카카오페이지 #김비서가왜그럴까',
    'image-url': '/kimms.png',
    'background-image-url': '/kimmsback.png',
    'status-message': '퇴사할 예정입니다. :)',
  },
];

export const getServerSideProps
: GetServerSideProps<{characterProfileProps: CharacterProfileProps}> = async (context) => {
  const characterId = context.query.character_id;
  // TODO: 서버에서 캐릭터 profile을 얻게되면 API 호출을 할 예정
  if (Array.isArray(characterId) || !characterId) {
    return {
      notFound: true,
    };
  }

  const idNumber = parseInt(characterId, 10);
  if (Number.isNaN(idNumber) || idNumber < 0 || idNumber >= characterProfileDataSet.length) {
    return {
      notFound: true,
    };
  }

  const dataSet = characterProfileDataSet[idNumber];

  return {
    props: {
      characterProfileProps: {
        characterName: dataSet['bot-name'],
        characterId,
        hashTag: dataSet['hash-tag'],
        imageUrl: dataSet['image-url'],
        backgroundImageUrl: dataSet['background-image-url'],
        statusMessage: dataSet['status-message'],
      },
    },
  };
};

const pageCSS = css`
  height: 100vh;
  width: 400px;
  position: fixed;
  left: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  padding-bottom: 0;
  z-index: 2;
`;

const backgroundCSS = (backgroundImageUrl: string) => css`
  height: 100vh;
  width: 400px;
  background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(230, 229, 229, 0.9) ), url(${backgroundImageUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: fixed;
  z-index: 1;
`;
