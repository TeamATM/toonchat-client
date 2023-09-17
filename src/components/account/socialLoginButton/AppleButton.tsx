import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';

const AppleButton = () => {
  // TODO: 애플 소셜로그인 절차 구현
  // TODO: 애플 로그인은 Apple Developer 과금이 되어야 가능한 상태라서 지금은 카카오로 막아놓음
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
        css={imageCSS}
      />
    </button>
  );
};

export default AppleButton;

const providerButtonCSS = css`
  background: none;
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  border: 1px solid ${color.black};
  margin: 0.5rem;
`;

const imageCSS = css`
  margin: 0.5rem auto;
`;
