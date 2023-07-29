import { FC } from 'react';

interface IconProps {
  color: string
}

const HomeIcon: FC<IconProps> = ({ color }) => (
  <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8005 16.4182H9.06445" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16.5 21.5H8.5C5.73858 21.5 3.5 19.2614 3.5 16.5V11.7C3.50001 10.1811 4.19046 8.74453 5.37653 7.79568L9.37653 4.59568C11.2026 3.13477 13.7974 3.13477 15.6235 4.59568L19.6235 7.79568C20.8096 8.74455 21.5 10.1811 21.5 11.7V16.5C21.5 19.2614 19.2614 21.5 16.5 21.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default HomeIcon;
