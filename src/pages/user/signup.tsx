import { css } from '@emotion/react';
import ToonChatHead from '@/components/head/ToonChatHead';
import PageTitle from '@/components/user/PageTitle';
import UnderLineText from '@/components/user/pageTitle/UnderLineText';
import PageDescribe from '@/components/user/PageDescribe';
import SocialLoginButtons from '@/components/user/SocialLoginButtons';
import DivideLineText from '@/components/user/DivideLineText';
import Input from '@/components/user/Input';
import PasswordInput from '@/components/user/PasswordInput';
import Button from '@/components/user/Button';
import { FormEvent, useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`username : ${username} / email : ${email}`);
  };

  return (
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
        <section css={wrapperCSS}>
          <SocialLoginButtons />
          <DivideLineText>OR</DivideLineText>
          <form onSubmit={handleSubmit}>
            <Input text="Your email" inputType="email" value={email} setState={setEmail} />
            <Input text="Your name" inputType="text" value={username} setState={setUsername} />
            <PasswordInput text="Password" />
            <PasswordInput text="Confirm Password" />
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
  padding: 10px;
`;

const wrapperCSS = css`
  width: 100%;
  padding: 24px;
`;
