import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Toast from '@/components/common/toast/Toast';

const KakaoButton = () => {
  // TODO: 카카오 로그인 절차가 성공하면 꼭 돌아올게...
  const [toastMessage, setToastMessage] = useState('');
  const handleToastClose = () => {
    setToastMessage('');
  };
  const kakaoLoginHandler = () => {
    // setToastMessage('소셜로그인은 추후에 제공될 예정입니다. :)');
    signIn('kakao', {
      callbackUrl: '/',
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
      {
        toastMessage
          ? <Toast message={toastMessage} handleClose={handleToastClose} />
          : null
      }
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
