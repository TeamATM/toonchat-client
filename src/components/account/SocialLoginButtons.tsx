import { css } from '@emotion/react';
// TODO: 애플로그인을 할 수 있는 상황이 되면 다시 복구하기
// import AppleButton from './socialLoginButton/AppleButton';
import GoogleButton from './socialLoginButton/GoogleButton';
import NaverButton from './socialLoginButton/NaverButton';
import KakaoButton from './socialLoginButton/KakaoButton';

const SocialLoginButtons = () => (
  <div css={socialLoginContainer}>
    <NaverButton />
    <GoogleButton />
    {/* <AppleButton /> */}
    <KakaoButton />
  </div>
);

export default SocialLoginButtons;

const socialLoginContainer = css`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
