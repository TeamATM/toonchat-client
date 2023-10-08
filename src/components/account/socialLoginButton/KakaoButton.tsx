import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import { signIn } from 'next-auth/react';

const KakaoButton = () => {
  const kakaoLoginHandler = () => {
    signIn('kakao', {
      callbackUrl: '/friends',
      redirect: false,
    });
  };

  return (
    <button onClick={kakaoLoginHandler} type="button" css={providerButtonCSS}>
      <Image
        src="/providerLogo/kakao.svg"
        alt="Google"
        width={26}
        height={26}
        css={imageCSS}
      />
    </button>
  );
};

export default KakaoButton;

const providerButtonCSS = css`
  background: #FEE500;
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  border: 1px solid ${color.black};
  margin: 0.5rem;
`;

const imageCSS = css`
  margin: 0.5rem auto;
`;
