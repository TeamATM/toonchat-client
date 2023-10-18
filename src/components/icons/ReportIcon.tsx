import { IconProps } from '@/types/icon';
import { FC } from 'react';

const ReportIcon: FC<IconProps> = ({ color }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Icon Shape" fillRule="evenodd" clipRule="evenodd" d="M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM11.4561 12.3388C10.3786 13.2208 9.00108 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5C1.25 5.99892 1.77918 4.62144 2.66116 3.54393C2.66823 3.55174 2.67553 3.55941 2.68306 3.56694L11.4331 12.3169C11.4406 12.3245 11.4483 12.3318 11.4561 12.3388ZM12.3388 11.4561C12.3318 11.4483 12.3245 11.4406 12.3169 11.4331L3.56694 2.68306C3.55941 2.67553 3.55174 2.66823 3.54393 2.66116C4.62144 1.77918 5.99892 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5C13.75 9.00108 13.2208 10.3786 12.3388 11.4561Z" fill={color} />
  </svg>
);

export default ReportIcon;
