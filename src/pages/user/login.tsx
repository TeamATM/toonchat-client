import color from '@/styles/color';
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
    <main>
      {/* main은 본격적인 로그인 절차를 할 수 있도록 하는 부분 */}
      <div>
        <button type="submit">google</button>
        <button type="submit">naver</button>
        <button type="submit">apple</button>
      </div>
      <div>
        <div css={divLineCSS} />
        <div>OR</div>
        <div css={divLineCSS} />
      </div>
      <form>
        <div>Your email</div>
        <input type="email" required />
        <div>Password</div>
        <input type="password" required />
        <button type="submit">
          login
        </button>
        <div>Forget password?</div>

        <div css={divLineCSS} />
      </form>
    </main>
    <footer>
      {/* footer는 로그인이 아니라 가입을 하고 싶은 사람이 있다면 이용할 태그 */}
      <div>You don&apos;t have an acount?</div>
      <Link href="/">
        <button type="submit">
          Sign up
        </button>
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

const divLineCSS = css`
  border-top: 1px solid ${color.greenGray};
`;
