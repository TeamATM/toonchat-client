import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import SEO from '@/components/common/head/SEO';
import Button from '@/components/common/button/Button';
import DivideLine from '@/components/common/divideLine/DivideLine';
import DivideLineText from '@/components/common/divideLine/DivideLineText';
import Input from '@/components/common/input/Input';
import PageDescribe from '@/components/common/pageText/PageDescribe';
import PageTitle from '@/components/common/pageText/PageTitle';
import PasswordInput from '@/components/common/input/PasswordInput';
import SocialLoginButtons from '@/components/account/SocialLoginButtons';
// import ToForgetPassword from '@/components/account/ToForgetPassword';
import UnderLineText from '@/components/common/textUnderLineDeco/UnderLineText';
import { signIn } from 'next-auth/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });
  };
  return (
    <section css={pageCSS}>
      {/* header : 로그인 페이지에 대한 설명 */}
      <SEO title="Log in" />
      <header>
        <PageTitle>
          <UnderLineText>Log in</UnderLineText>
          <span> to ToonChat</span>
        </PageTitle>
        <PageDescribe>
          Welcome back!
          Sign in using your social account
          or email to continue us
        </PageDescribe>
      </header>
      {/* main : 로그인 작업 */}
      <main css={wrapperCSS}>
        <SocialLoginButtons />
        <DivideLineText>OR</DivideLineText>
        <form onSubmit={handleSubmit}>
          <Input text="Your email" inputType="email" value={email} setState={setEmail} />
          <PasswordInput text="Password" value={password} setState={setPassword} />
          <Button theme="green">
            Log in
          </Button>
          {/* <ToForgetPassword /> */}
        </form>
      </main>
      {/* footer : 회원가입 작업 */}
      <footer css={wrapperCSS}>
        <DivideLine />
        <Link href="/signup">
          <Button theme="white">
            Sign up
          </Button>
        </Link>
      </footer>
    </section>
  );
};

export default Login;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const wrapperCSS = css`
  width: 100%;
  padding: 1.5rem;
`;
