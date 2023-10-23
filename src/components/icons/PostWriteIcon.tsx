import { FC } from 'react';
import { IconProps } from '@/types/icon';

const PostWriteIcon: FC<IconProps> = ({ color }) => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8H14V5H11V3H14V0H16V3H19V5H16V8Z" fill={color} />
    <path d="M18 10H16V13H5.334C4.90107 12.9988 4.47964 13.1393 4.134 13.4L2 15V3H9V1H2C0.89543 1 0 1.89543 0 3V19L4.8 15.4C5.14582 15.1396 5.56713 14.9992 6 15H16C17.1046 15 18 14.1046 18 13V10Z" fill={color} />
  </svg>
);

export default PostWriteIcon;
