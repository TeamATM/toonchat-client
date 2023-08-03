import color from '@/styles/color';
import { css, keyframes } from '@emotion/react';
import {
  useState, useEffect, FC, KeyboardEvent,
} from 'react';

interface ToastProps {
  message: string;
  handleClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, handleClose }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClose();
    }
  };

  return (
    <div
      css={toastCSS(startAnimation)}
      onClick={handleClose}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {message}
    </div>
  );
};

const slide = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

const toastCSS = (startAnimation : boolean) => css`
  position: fixed;
  z-index: 3;
  bottom: 50%;
  right: 50%;
  transform: translateX(50%);
  background: ${color.black};
  opacity: 0.5;
  color: ${color.white};
  padding: 1rem;
  border-radius: 1.875rem;
  animation: ${startAnimation ? css`${slide} 1s ease forwards` : 'none'};
  display: flex;
  align-items: center;
`;

export default Toast;
