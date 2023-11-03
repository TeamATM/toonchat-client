import color from '@/styles/color';
import { css } from '@emotion/react';

type Theme = 'green' | 'white'

const themeTable = {
  green: {
    backgroundColor: color.darkGreen,
    color: color.offWhite,
  },
  white: {
    backgroundColor: color.offWhite,
    color: color.greenGray,
  },
};

const InApp = () => {
  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      window.open(window.location.href, '_blank');
    }
  };

  // 인앱 브라우저인지 확인하는 함수
  const isInAppBrowser = () => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf('kakao') >= 0) return true;
      if (userAgent.indexOf('[fb') >= 0) return true;
      if (userAgent.indexOf('instagram') >= 0) return true;
      if (userAgent.indexOf('trill') >= 0) return true;
      if (userAgent.indexOf('line') >= 0) return true;
    }
    return false;
  };

  // 인앱 브라우저가 아니라면 null을 반환하여 컴포넌트를 렌더링하지 않습니다.
  if (!isInAppBrowser()) {
    return null;
  }
  return (
    <button onClick={handleButtonClick} css={ButtonCSS('green')} type="button">
      외부 브라우저에서 열기
    </button>
  );
};

export default InApp;

const ButtonCSS = (theme: Theme) => css`
  width: 100%;
  background-color: ${themeTable[theme].backgroundColor};
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 0.625rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${themeTable[theme].color};
`;
