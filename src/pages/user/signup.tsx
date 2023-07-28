import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import PageTitle from '@/components/user/PageTitle';
import UnderLineText from '@/components/user/pageTitle/UnderLineText';
import PageDescribe from '@/components/user/PageDescribe';

const signup = () => (
  <>
    <ToonChatHead title="Sign up" />
    <section css={pageCSS}>
      {/* header : 회원가입 페이지에 대한 설명 */}
      <header>
        <PageTitle>
          <span>Sign up with </span>
          <UnderLineText>Email</UnderLineText>
        </PageTitle>
        <PageDescribe>
          Get chatting with friends and family today
          by signing up for our chat app!
        </PageDescribe>
      </header>
    </section>
  </>
);

export default signup;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
