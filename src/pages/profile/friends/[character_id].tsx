import { css } from '@emotion/react';
import Link from 'next/link';
import SEO from '@/components/common/head/SEO';
import color from '@/styles/color';
import ProfileFriendShip from '@/components/profile/ProfileFriendShip';
import BackwordIcon from '@/components/icons/BackwordIcon';
import ProfileRouteButtons from '@/components/profile/ProfileRouteButtons';
import CharacterProfileInfo from '@/components/profile/CharacterProfileInfo';
import { findCharacterById } from '@/utils/api/character';
import { CharacterInfo } from '@/types/characterInfo';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/common/dialog/Loading';

const FriendProfile = () => {
  const router = useRouter();
  const { character_id: characterId } = router.query;
  const [characterInfo, setCharacterInfo] = useState<CharacterInfo>();
  useEffect(() => {
    if (characterId && typeof characterId === 'string') {
      findCharacterById(characterId)
        .then((data) => {
          setCharacterInfo(data);
        })
        .catch((error) => {
          console.error('Error fetching post:', error);
        });
    }
  }, [characterId]);

  return (
    <>
      <SEO title={characterInfo ? `${characterInfo.characterName}의 프로필` : '프로필 로딩 중'} />
      {characterInfo
        ? (
          <>
            <div css={backgroundCSS(characterInfo.backgroundImageUrl)} />
            <div css={css`z-index: 100; position: fixed; padding: 4rem 1rem;`}>
              <Link href="/friends">
                <BackwordIcon color={color.white} />
              </Link>
            </div>
            <section css={pageCSS}>
              <CharacterProfileInfo
                characterName={characterInfo.characterName}
                hashTag={characterInfo.hashTag}
                imageUrl={characterInfo.profileImageUrl}
                statusMessage={characterInfo.statusMessage}
              />
              <ProfileRouteButtons characterId={characterInfo.characterId} />
              <div css={css`margin: 1rem; height: 4px; border-radius: 2px; background: ${color.greenGray}; width: 2.5rem;`} />
              <ProfileFriendShip />
            </section>
          </>
        )
        : <Loading />}
    </>
  );
};

export default FriendProfile;

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
