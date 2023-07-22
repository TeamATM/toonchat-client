import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

type Theme = 'green' | 'white'

interface ButtonProps {
  children: ReactNode,
  theme: Theme
}

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

const Button: FC<ButtonProps> = ({ children, theme }) => (
  <button css={ButtonCSS(theme)} type="submit">
    {children}
  </button>
);

export default Button;

const ButtonCSS = (theme: Theme) => css`
  width: 100%;
  background-color: ${themeTable[theme].backgroundColor};
  border: none;
  padding: 16px;
  border-radius: 16px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${themeTable[theme].color};
`;
