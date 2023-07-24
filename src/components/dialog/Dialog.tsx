import { css } from '@emotion/react';
import {
  FC, ReactNode, useEffect, useRef,
} from 'react';

interface DialogProps {
  closeModal: () => void,
  children: ReactNode,
}

const Dialog: FC<DialogProps> = ({ closeModal, children }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  return (
    <div css={dialogCSS}>
      <div css={dialogContentsCSS}>
        {children}
        <button type="button" onClick={closeModal} ref={closeButtonRef}>Close</button>
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

const dialogContentsCSS = css`
  position: relative;
  width: 500px;
  padding: 20px;
  background: white;
  z-index: 2;
`;

const dialogBackdropCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
