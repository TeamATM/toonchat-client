import color from '@/styles/color';
import { css } from '@emotion/react';
import {
  FC, ReactNode, useEffect, useRef,
} from 'react';

type Theme = 'green' | 'white'

interface DialogProps {
  closeModal: () => void,
  theme: Theme,
  children: ReactNode,
}

const themeTable = {
  green: {
    backgroundColor: color.darkGreen,
    color: color.offWhite,
    subBackgroundColor: color.offWhite,
    subColor: color.greenGray,
  },
  white: {
    backgroundColor: color.offWhite,
    color: color.greenGray,
    subBackgroundColor: color.darkGreen,
    subColor: color.offWhite,
  },
};

const Dialog: FC<DialogProps> = ({ closeModal, theme, children }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  return (
    <div css={dialogCSS}>
      <div css={dialogContentsCSS(theme)}>
        <div css={dialogTextCSS}>{children}</div>
        <button type="button" onClick={closeModal} ref={closeButtonRef} css={buttonCSS(theme)}>ENTER</button>
      </div>
      <button
        type="button"
        css={dialogBackdropCSS}
        onClick={closeModal}
        aria-label="close modal"
      />
    </div>
  );
};

export default Dialog;

const dialogCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const dialogContentsCSS = (theme: Theme) => css`
  position: relative;
  z-index: 2;

  border-radius: 16px;
  padding: 20px;
  background-color: ${themeTable[theme].backgroundColor};
  color: ${themeTable[theme].color};

  text-align: center;
`;

const dialogTextCSS = css`
  font-size: 14px;
  padding: 10px;
  padding-bottom: 20px;
`;

const dialogBackdropCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const buttonCSS = (theme: Theme) => css`
  width: 80%;
  background-color: ${themeTable[theme].subBackgroundColor};
  border: none;
  padding: 10px;
  margin-top: 30px;
  border-radius: 12px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  color: ${themeTable[theme].subColor};

  &:focus {
    outline: none;
  }
`;
