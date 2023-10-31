import { css } from '@emotion/react';
import MessageInput from '@/components/chat/MessageInput';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import SEO from '@/components/common/head/SEO';
import { useEffect } from 'react';
import useChatStore from '@/store/chat';
import { CharacterInfo } from '@/types/characterInfo';
import { ssrFindAllCharacters, ssrFindCharacterById } from '@/utils/api/character';
import { GetStaticPaths, GetStaticProps } from 'next';

const Character = ({ characterInfo }: { characterInfo: CharacterInfo }) => {
  const { setChatInfo } = useChatStore();

  useEffect(() => {
    setChatInfo(characterInfo.characterName, characterInfo.characterId);
  }, []);

  return (
    <>
      <SEO title={`대화 with ${characterInfo.characterName}`} />
      <section css={pageCSS}>
        <div>
          <Header
            characterId={characterInfo.characterId}
            profileImageUrl={characterInfo.profileImageUrl}
            characterName={characterInfo.characterName}
            hashTag={characterInfo.hashTag}
          />
          <Main
            characterId={characterInfo.characterId}
            characterName={characterInfo.characterName}
            profileImageUrl={characterInfo.profileImageUrl}
          />
        </div>
        <MessageInput
          characterId={characterInfo.characterId}
          characterName={characterInfo.characterName}
        />
      </section>
    </>
  );
};
export default Character;

export const getStaticPaths: GetStaticPaths = async () => {
  const characterIds = await ssrFindAllCharacters();

  return {
    paths: characterIds.map((data) => ({ params: { character: data.characterId.toString() } })),
    fallback: 'blocking', // 존재하지 않는 경로의 경우, 서버에서 렌더링하도록 설정
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { character } = context.params!;

  try {
    const characterInfo = await ssrFindCharacterById(character as string);
    return { props: { characterInfo } };
  } catch (error) {
    return { notFound: true };
  }
};

const pageCSS = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem;
`;
