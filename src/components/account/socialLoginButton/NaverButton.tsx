import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import { signIn } from 'next-auth/react';

const NaverButton = () => {
  const naverLoginHandler = () => {
    signIn('naver', {
      callbackUrl: '/friends',
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
