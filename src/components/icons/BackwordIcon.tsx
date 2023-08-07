import { FC } from 'react';

interface IconProps {
  color: string
}

const BackwordIcon: FC<IconProps> = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default BackwordIcon;
