import { FC } from 'react';

interface IconProps {
  color: string
}

const ChatIcon: FC<IconProps> = ({ color }) => (
  <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5001 9.791C19.5001 14.33 15.4521 17.973 10.5001 17.973C9.8591 17.973 9.2351 17.91 8.6311 17.794" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.099 16.326C2.92 14.836 1.5 12.474 1.5 9.791" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.09901 16.326C5.09801 17.18 5.10001 18.332 5.10001 19.541" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.5 9.791C1.5 5.252 5.548 1.61 10.5 1.61C15.452 1.61 19.5 5.253 19.5 9.792" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.6301 17.79L5.1001 19.54" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.6768 9.82319C10.7744 9.92082 10.7744 10.0791 10.6768 10.1767C10.5791 10.2744 10.4209 10.2744 10.3232 10.1767C10.2256 10.0791 10.2256 9.92082 10.3232 9.82319C10.4209 9.72556 10.5791 9.72556 10.6768 9.82319" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.6768 9.82319C14.7744 9.92082 14.7744 10.0791 14.6768 10.1767C14.5791 10.2744 14.4209 10.2744 14.3232 10.1767C14.2256 10.0791 14.2256 9.92082 14.3232 9.82319C14.4209 9.72556 14.5791 9.72556 14.6768 9.82319" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.67678 9.82319C6.77441 9.92082 6.77441 10.0791 6.67678 10.1767C6.57915 10.2744 6.42085 10.2744 6.32322 10.1767C6.22559 10.0791 6.22559 9.92082 6.32322 9.82319C6.42085 9.72556 6.57915 9.72556 6.67678 9.82319" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default ChatIcon;
