import { css } from '@emotion/react';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';
import ToonChatHead from '@/components/head/ToonChatHead';

const Community = () => (
  <>
    <ToonChatHead title="Community" />
    <section css={pageCSS}>
      커뮤니티 기능은 추후 제공될 예정입니다.
    </section>
    <BottomNavigation pageName="Community" />
  </>
);

export default Community;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
