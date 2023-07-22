import color from '@/styles/color';
import { css } from '@emotion/react';
import Image from 'next/image';

const AppleButton = () => {
  // TODO: 애플 소셜로그인 절차 구현
  const appleLoginHandler = () => {
    console.log('애플 소셜로그인 절차 진행');
  };

  return (
    <button onClick={appleLoginHandler} type="button" css={providerButtonCSS}>
      <Image
        src="/providerLogo/apple.svg"
        alt="Apple"
        width={26}
        height={26}
        style={imageStyle}
      />
    </button>
  );
};

export default AppleButton;

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
