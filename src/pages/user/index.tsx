import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';

const ChatMain = () => (
  <>
    <ToonChatHead title="Friends" />
    <section css={pageCSS}>
      index
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
