import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

type ButtonProps = {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => (
  <button css={ButtonCSS} type="submit">
    {children}
  </button>
);

export default Button;

const ButtonCSS = css`
  width: 100%;
  background-color: ${color.darkGreen};
  border: none;
  padding: 16px;
  border-radius: 16px;

  font-size: 16px;
  font-weight: 400;
  color: ${color.offWhite};
`;
