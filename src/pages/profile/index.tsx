import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import ToonChatHead from '@/components/head/ToonChatHead';
import { css } from '@emotion/react';

const Profile = () => (
  <>
    <ToonChatHead title="Profile" />
    <section css={pageCSS}>
      프로필 기능은 추후 제공될 예정입니다.
    </section>
    <BottomNavigation pageName="Profile" />
  </>
);

export default Profile;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
`;
