import { GetServerSideProps } from 'next';
import MessageInput from '@/components/chat/MessageInput';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import { css } from '@emotion/react';
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
        <Header
          characterId={characterId}
          imageUrl={imageUrl}
          characterName={characterName}
          hashTag={hashTag}
        />
        <Main characterId={characterId} characterName={characterName} imageUrl={imageUrl} />
        <MessageInput characterId={characterId} characterName={characterName} />
      </section>
    </>
);
export default Character;

export const getServerSideProps
:GetServerSideProps<{characterProps:CharacterProps}> = async (context) => {
  const characterId = context.query.character;

  if (Array.isArray(characterId) || !characterId) {
    return {
      notFound: true,
    };
  }
  const res = await fetch(`/api/character/info/${characterId}`);
  const dataSet = await res.json();

  if (dataSet.error) {
    return {
      notFound: true,
    };
  }

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
