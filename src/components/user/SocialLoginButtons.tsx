import { css } from '@emotion/react';
import AppleButton from './socialLoginButton/AppleButton';
import GoogleButton from './socialLoginButton/GoogleButton';
import NaverButton from './socialLoginButton/NaverButton';

const SocialLoginButtons = () => (
  <div css={socialLoginContainer}>
    <NaverButton />
    <GoogleButton />
    <AppleButton />
  </div>
);

export default SocialLoginButtons;

const socialLoginContainer = css`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
