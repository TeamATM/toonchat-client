import { GetServerSideProps } from 'next';
import MessageInput from '@/components/chat/MessageInput';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import { css } from '@emotion/react';

interface CharacterProps {
  characterId: string;
}

const Character = ({ characterId }: CharacterProps) => {
  // 이영준 이름은 페이지 로딩끝나면 API로 받아와야함
  const characterName = '이영준';

  return (
    <section css={pageCSS}>
      <Header characterId={characterId} characterName={characterName} />
      <Main />
      <MessageInput />
    </section>
  );
};

export default Character;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const characterId = context.query.character;
  console.log(characterId);

  if (Array.isArray(characterId) || !characterId) {
    return {
      notFound: true,
    };
  }

  return {
    // TODO: 이영준을 잘 받아올 수 있도록 수정해야함
    props: { characterId: 'leeyj' },
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
