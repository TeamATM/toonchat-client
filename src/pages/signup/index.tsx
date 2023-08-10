import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import SEO from '@/components/common/head/SEO';
import PageTitle from '@/components/user/PageTitle';
import UnderLineText from '@/components/user/pageTitle/UnderLineText';
import PageDescribe from '@/components/user/PageDescribe';
import SocialLoginButtons from '@/components/user/SocialLoginButtons';
import DivideLineText from '@/components/user/DivideLineText';
import Input from '@/components/user/Input';
import PasswordInput from '@/components/user/PasswordInput';
import Button from '@/components/user/Button';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signupRes = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        email, username, password, confirmPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const signupData = await signupRes.json();
    if ('error' in signupData) {
      // TODO: 회원가입 실패시 알려주는 UI가 필요함
      alert('회원가입 실패');
      return;
    }
    // 회원가입 성공!
    router.push({
      pathname: '/user/login',
    });
  };

  return (
    <>
      <SEO title="Sign up" />
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
        <section css={wrapperCSS}>
          <SocialLoginButtons />
          <DivideLineText>OR</DivideLineText>
          <form onSubmit={handleSubmit}>
            <Input text="Your email" inputType="email" value={email} setState={setEmail} />
            <Input text="Your name" inputType="text" value={username} setState={setUsername} />
            <PasswordInput text="Password" value={password} setState={setPassword} />
            <PasswordInput text="Confirm Password" value={confirmPassword} setState={setConfirmPassword} />
            <Button theme="white">
              Create an account
            </Button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Signup;

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
