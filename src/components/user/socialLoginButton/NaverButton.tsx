import color from '@/styles/color';
import { css } from '@emotion/react';
import Image from 'next/image';

const NaverButton = () => {
  // TODO: 네이버 소셜로그인 절차 구현
  const naverLoginHandler = () => {
    console.log('네이버 소셜로그인 절차 진행');
  };

  return (
    <button onClick={naverLoginHandler} type="button" css={providerButtonCSS}>
      <Image
        src="/providerLogo/naver.svg"
        alt="Naver"
        width={26}
        height={26}
        style={imageStyle}
      />
    </button>
  );
};

export default NaverButton;

const providerButtonCSS = css`
  background: none;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  border: 1px solid ${color.black};
  margin: 10px;
`;

const imageStyle = {
  margin: '11px auto',
};
