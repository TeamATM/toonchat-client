import { css } from '@emotion/react';
import MessageInput from '@/components/chat/MessageInput';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import SEO from '@/components/common/head/SEO';
import { useEffect, useState } from 'react';
import useChatStore from '@/store/chat';
import { useRouter } from 'next/router';
import { CharacterInfo } from '@/types/characterInfo';
import { findCharacterById } from '@/utils/api/character';
import Loading from '@/components/common/dialog/Loading';

const Character = () => {
  const router = useRouter();
  const { character: characterId } = router.query;
  const [characterInfo, setCharacterInfo] = useState<CharacterInfo>();
  const { setChatInfo } = useChatStore();

  useEffect(() => {
    if (characterId && typeof characterId === 'string') {
      findCharacterById(characterId)
        .then((data) => {
          setCharacterInfo(data);
          setChatInfo(data.characterName, data.characterId);
        })
        .catch((error) => {
          console.error('Error fetching post:', error);
        });
    }
  }, [characterId]);

  return (
    <>
      <SEO title={characterInfo ? `대화 with ${characterInfo.characterName}` : '로딩 중'} />
      <section css={pageCSS}>
        {characterInfo
          ? (
            <>
              <div>
                <Header
                  characterId={characterInfo.characterId}
                  imageUrl={characterInfo.profileImageUrl}
                  characterName={characterInfo.characterName}
                  hashTag={characterInfo.hashTag}
                />
                <Main
                  characterId={characterInfo.characterId}
                  characterName={characterInfo.characterName}
                  imageUrl={characterInfo.profileImageUrl}
                />
              </div>
              <MessageInput
                characterId={Number(characterId)}
                characterName={characterInfo.characterName}
              />
            </>
          ) : <Loading />}
      </section>
    </>
  );
};
export default Character;

const pageCSS = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem;
`;
