import { css } from '@emotion/react';
import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar';
import SEO from '@/components/common/head/SEO';

const Profile = () => (
  <>
    <SEO title="Profile" />
    <section css={pageCSS}>
      프로필 기능은 추후 제공될 예정입니다.
    </section>
    <BottomNavBar pageName="Profile" />
  </>
);

export default Profile;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  padding-bottom: 0;
`;
