import color from '@/styles/color';
import { css } from '@emotion/react';
import Image from 'next/image';

const providerList = ['Naver', 'Google', 'Apple'];

const SocialLoginButtons = () => (
  <div css={socialLoginContainer}>
    {
    // TODO: 하나하나를 버튼 컴포넌트로 뺄 것이기 때문에 map으로 돌리는 방식은 사라질 예정
      providerList.map((provider) => (
        // eslint-disable-next-line react/jsx-key, react/button-has-type
        <button css={providerButtonCSS}>
          <Image
            src={`/providerLogo/${provider}.svg`}
            alt={provider}
            width={30}
            height={30}
            style={imageStyle}
          />
        </button>
      ))
    }
  </div>
);

export default SocialLoginButtons;

const socialLoginContainer = css`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

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
