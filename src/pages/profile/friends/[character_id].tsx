import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import Image from 'next/image';
import ToonChatHead from '@/components/head/ToonChatHead';
import color from '@/styles/color';
import ChatIcon from '@/components/icons/ChatIcon';
import CommunityIcon from '@/components/icons/CommunityIcon';
import ProfileLinkWrapper from '@/components/profile/ProfileLinkWrapper';

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
        <div css={css`display:flex; flex-direction:column; align-items: center;`}>
          <div css={imageWrapperCSS}>
            <Image
              src={imageUrl}
              css={imageCSS}
              alt={`/${characterName}`}
              fill
            />
          </div>
          <div css={css`font-size:1.25rem; font-weight:700; padding:0.5rem; color: ${color.black};`}>{characterName}</div>
          <div css={css`font-size:0.875rem; font-weight:bold; color:${color.greenGray}; padding-top:2rem;`}>{hashTag}</div>
          <div css={css`font-size:1.125rem; font-weight:400; padding:1rem;`}>{statusMessage}</div>
        </div>
        <div css={css`width:100%; padding-top:3rem; display: grid; grid-template-columns: repeat(2, 1fr); justify-items: center; justify-content: center;`}>
          <ProfileLinkWrapper linkUrl={`/chats/${characterId}`} color={color.black}>
            <ChatIcon color={color.black} />
            chat
          </ProfileLinkWrapper>
          {/* TODO: community가 생기면 아래 링크를 바꿔야합니다. */}
          <ProfileLinkWrapper linkUrl={`/profile/friends/${characterId}`} color={color.black}>
            <CommunityIcon color={color.black} />
            Community
          </ProfileLinkWrapper>
        </div>
        <div>
          <div>친구 Level</div>
          <div>친구된지 며칠?</div>
        </div>
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
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 0;
  z-index: 2;
`;

const backgroundCSS = (backgroundImageUrl: string) => css`
  height: 100vh;
  width: 400px;
  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.9) ), url(${backgroundImageUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: fixed;
  z-index: 1;
`;

const imageWrapperCSS = css`
  width: 5.5rem;
  height: 5.5rem;
  position: relative;
`;

const imageCSS = css`
  border-radius: 50%;
`;
