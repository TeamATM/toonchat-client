import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import BottomNavigation from '@/components/bottomNavigation/BottomNavigation';

const ChatMain = () => (
  <>
    <ToonChatHead title="Chat" />
    <section css={pageCSS}>
      채팅내역이 나올 예정인 페이지
      아직 구현 안됐어용
      <BottomNavigation pageName="Chat" />
    </section>
  </>
);

export default ChatMain;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
