import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import { signIn } from 'next-auth/react';
import Toast from '@/components/common/toast/Toast';
import { useState } from 'react';

const NaverButton = () => {
  // TODO: 네이버 로그인 절차가 성공하면 꼭 돌아올게...
  const [toastMessage, setToastMessage] = useState('');
  const handleToastClose = () => {
    setToastMessage('');
  };
  const naverLoginHandler = () => {
    // setToastMessage('소셜로그인은 추후에 제공될 예정입니다. :)');
    signIn('naver', {
      callbackUrl: '/',
      redirect: false,
    });
  };

  return (
    <button onClick={naverLoginHandler} type="button" css={providerButtonCSS}>
      <Image
        src="/providerLogo/naver.svg"
        alt="Naver"
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

export default NaverButton;

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
