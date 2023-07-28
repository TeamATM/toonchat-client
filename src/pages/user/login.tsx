import ToonChatHead from '@/components/head/ToonChatHead';
import Button from '@/components/user/Button';
import DivideLine from '@/components/user/DivideLine';
import DivideLineText from '@/components/user/DivideLineText';
import Input from '@/components/user/Input';
import PageDescribe from '@/components/user/PageDescribe';
import PageTitle from '@/components/user/PageTitle';
import PasswordInput from '@/components/user/PasswordInput';
import SocialLoginButtons from '@/components/user/SocialLoginButtons';
import ToForgetPassword from '@/components/user/ToForgetPassword';
import UnderLineText from '@/components/user/pageTitle/UnderLineText';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginRes = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const loginData = await loginRes.json();

    if ('error' in loginData) {
      // TODO: 로그인 실패시 알려주는 UI가 필요함
      alert('로그인 실패');
      return;
    }
    // 로그인 성공!
    // TODO: 로그인 성공시 채팅 메인 페이지가 있어야하지만, 지금 존재하지 않아서 아무 채팅에 들어가도록 바꿈.
    router.push({
      pathname: `/chat/${Math.floor(Math.random() * 2)}`,
    });
  };
  return (
    <section css={pageCSS}>
      {/* header : 로그인 페이지에 대한 설명 */}
      <ToonChatHead title="Log in" />
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
          <ToForgetPassword />
        </form>
      </main>
      {/* footer : 회원가입 작업 */}
      <footer css={wrapperCSS}>
        <DivideLine />
        <Link href="/user/signup">
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
  padding: 10px;
`;

const wrapperCSS = css`
  width: 100%;
  padding: 24px;
`;
