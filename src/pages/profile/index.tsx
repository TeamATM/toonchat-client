import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';
import { useSession } from 'next-auth/react';
import CharacterProfileInfo from '@/components/profile/CharacterProfileInfo';
import Loading from '@/components/common/dialog/Loading';
import color from '@/styles/color';
import UserRouteButtons from '@/components/profile/UserRouteButtons';

const Profile = () => {
  const { data: session }: any = useSession();
  console.log(session);

  return (
    <>
      <SEO title="Profile" />
      <section css={pageCSS}>
        {
          session
            ? (
              <CharacterProfileInfo
                characterName={session.user.name}
                hashTag={session.user.email}
                // TODO: 프로필 이미지를 만들어봐야할 것 같습니다.
                // TODO: 개인 프로필 상태메시지가 있으면 어떨까요?
                profileImageUrl="/default-user.png"
                statusMessage="ToonChat에 오신 것을 환영합니다."
              />
            ) : <Loading />
        }
        <UserRouteButtons />
        <div css={css`margin: 1rem; height: 4px; border-radius: 2px; background: ${color.greenGray}; width: 2.5rem;`} />
      </section>
      <BottomNavBar pageName="Profile" />
    </>
  );
};

export default Profile;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  padding-bottom: 0;
  z-index: 2;
`;
