import Button from '@/components/user/Button';
import DivideLine from '@/components/user/DivideLine';
import DivideLineText from '@/components/user/DivideLineText';
import Input from '@/components/user/Input';
import { css } from '@emotion/react';
import Link from 'next/link';

const login = () => (
  <section css={pageCSS}>
    <header>
      {/* header는 이 페이지에 대한 설명(로그인 페이지 이후에 회원가입 페이지에서도 사용할 수 있도록해야함) */}
      <h1>Login to ToonChat</h1>
      <h2>
        Welcome back!
        Sign in using your social account
        or email to continue us
      </h2>
    </header>
    <main css={css`width: 100%; padding: 24px;`}>
      {/* main은 본격적인 로그인 절차를 할 수 있도록 하는 부분 */}
      <div>
        <button type="submit">google</button>
        <button type="submit">naver</button>
        <button type="submit">apple</button>
      </div>

      <DivideLineText>OR</DivideLineText>

      <form>
        <Input text="Your email" inputType="email" />
        <Input text="Password" inputType="password" />
        <Button>
          Log in
        </Button>
        <div>Forget password?</div>

      </form>
    </main>
    <footer css={css`width: 100%; padding: 24px;`}>
      {/* footer는 로그인이 아니라 가입을 하고 싶은 사람이 있다면 이용할 태그 */}
      <DivideLine />
      <div>You don&apos;t have an acount?</div>
      <Link href="/">
        <Button>
          Sign up
        </Button>
      </Link>
    </footer>
  </section>
);

export default login;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
