import color from '@/styles/color';
import { css } from '@emotion/react';
import Image from 'next/image';

const GoogleButton = () => {
  // TODO: 구글 소셜로그인 절차 구현
  const googleLoginHandler = () => {
    console.log('구글 소셜로그인 절차 진행');
  };

  return (
    <button onClick={googleLoginHandler} type="button" css={providerButtonCSS}>
      <Image
        src="/providerLogo/google.svg"
        alt="Google"
        width={26}
        height={26}
        style={imageStyle}
      />
    </button>
  );
};

export default GoogleButton;

const providerButtonCSS = css`
  background: none;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  border: 1px solid ${color.black};
  margin: 10px;
`;

const imageStyle = {
  margin: '9px auto',
};
