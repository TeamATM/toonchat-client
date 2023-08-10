import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { css } from '@emotion/react';
import SEO from '@/components/common/head/SEO';
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
    router.push({ pathname: '/friends' });
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
          <ToForgetPassword />
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
