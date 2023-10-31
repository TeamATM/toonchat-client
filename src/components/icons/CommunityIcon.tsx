import { FC } from 'react';
import { IconProps } from '@/types/icon';

const CommunityIcon: FC<IconProps> = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 21.5C7.529 21.5 3.5 17.471 3.5 12.5C3.5 7.529 7.529 3.5 12.5 3.5C17.471 3.5 21.5 7.529 21.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.01001 9.5H20.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.01001 15.5H14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 12.5C16.5 9.73599 15.777 6.97199 14.333 4.55999C13.486 3.14699 11.514 3.14699 10.668 4.55999C7.77799 9.38499 7.77799 15.616 10.668 20.441C11.091 21.147 11.795 21.5 12.5 21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.2749 21.05C21.1509 21.05 21.0499 21.152 21.0499 21.275C21.0499 21.398 21.1509 21.5 21.2749 21.5C21.3979 21.5 21.4999 21.399 21.4989 21.275C21.4999 21.151 21.3999 21.05 21.2749 21.05" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.5 18.5C19.744 18.539 18.539 19.744 18.5 21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 21.5C15.509 20.741 15.637 20.03 15.867 19.379C16.455 17.714 17.714 16.455 19.38 15.866C20.03 15.637 20.741 15.509 21.5 15.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CommunityIcon;
