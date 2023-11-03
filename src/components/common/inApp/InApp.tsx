import { Theme, themeTable } from '@/styles/color';
import { css } from '@emotion/react';

const InApp = () => {
  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      window.open(window.location.href, '_blank');
    }
  };

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
