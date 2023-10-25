import { FC } from 'react';
import { IconProps } from '@/types/icon';

const ProfileSettingIcon: FC<IconProps> = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.00002 1.50006C9.24101 0.88986 10.051 -0.0286029 11.2754 0.290562C12.073 0.498456 12.8273 0.812781 13.5219 1.21707C14.6547 1.87642 14.5372 3.14674 14.2496 3.75006C14.853 3.46248 16.1237 3.34537 16.783 4.47819C17.1873 5.17281 17.5016 5.92705 17.7095 6.72464C18.0287 7.94912 17.1105 8.75854 16.5003 8.99953C17.1104 9.24052 18.0287 10.051 17.7095 11.2755C17.5738 11.796 17.3928 12.2982 17.1709 12.7774C16.8376 13.4975 16.1764 13.7916 15.6584 13.8491C15.163 13.904 14.6576 13.7752 14.25 13.4999C14.5842 13.861 14.7882 14.3413 14.8092 14.8391C14.8312 15.3589 14.642 16.0571 13.9816 16.4966C13.1646 17.0405 12.2526 17.4549 11.2754 17.7096C10.051 18.0287 9.24155 17.1105 9.00054 16.5003C8.75953 17.1105 7.94904 18.0287 6.72459 17.7096C5.74742 17.4549 4.83548 17.0405 4.01848 16.4966C3.35805 16.0571 3.1688 15.3589 3.19079 14.8391C3.21186 14.3413 3.41584 13.8612 3.75002 13.5001C3.34247 13.7754 2.83699 13.904 2.34159 13.8491C1.82368 13.7916 1.16244 13.4975 0.829085 12.7774C0.60724 12.2982 0.426196 11.796 0.290513 11.2755C-0.0286556 10.051 0.8896 9.24157 1.49977 9.00059C0.889569 8.75959 -0.0286487 7.94912 0.290515 6.72464C0.498409 5.92705 0.812736 5.17281 1.21703 4.4782C1.87637 3.34537 3.14669 3.46287 3.75002 3.75045C3.46241 3.14715 3.34533 1.87642 4.47815 1.21707C5.17276 0.812782 5.927 0.498455 6.72459 0.290561C7.94907 -0.028603 8.75902 0.88986 9.00002 1.50006ZM7.60435 2.05082C7.52277 1.84425 7.31785 1.68605 7.10293 1.74206C6.43927 1.91505 5.8114 2.17665 5.23271 2.51347C5.03435 2.62892 5.00558 2.89754 5.10445 3.10465C5.19777 3.30014 5.25002 3.519 5.25002 3.75006C5.25002 4.57849 4.57844 5.25006 3.75002 5.25006C3.51895 5.25006 3.3001 5.19782 3.10461 5.1045C2.89749 5.00563 2.62887 5.0344 2.51343 5.23275C2.1766 5.81145 1.915 6.43932 1.74202 7.10297C1.686 7.31789 1.8442 7.52282 2.05077 7.6044C2.6067 7.82396 3.00002 8.36608 3.00002 9.00006C3.00002 9.63404 2.6067 10.1762 2.05077 10.3957C1.8442 10.4773 1.686 10.6822 1.74202 10.8971C1.85493 11.3303 2.0056 11.7483 2.1903 12.1473C2.30951 12.4048 2.67554 12.4158 2.91056 12.2568C3.15012 12.0947 3.43901 12.0001 3.75002 12.0001C4.57844 12.0001 5.25002 12.6716 5.25002 13.5001C5.25002 13.8933 5.09866 14.2513 4.85102 14.5188C4.65825 14.727 4.61341 15.0907 4.84962 15.248C5.5306 15.7012 6.28991 16.0461 7.10292 16.2581C7.31784 16.3141 7.52277 16.1559 7.60435 15.9493C7.82392 15.3934 8.36603 15.0001 9.00002 15.0001C9.634 15.0001 10.1761 15.3934 10.3957 15.9493C10.4773 16.1559 10.6822 16.3141 10.8971 16.2581C11.7101 16.0461 12.4694 15.7012 13.1504 15.248C13.3866 15.0907 13.3418 14.727 13.149 14.5188C12.9014 14.2513 12.75 13.8933 12.75 13.5001C12.75 12.6716 13.4216 12.0001 14.25 12.0001C14.561 12.0001 14.8499 12.0947 15.0895 12.2568C15.3245 12.4158 15.6905 12.4048 15.8097 12.1473C15.9944 11.7483 16.1451 11.3303 16.258 10.8971C16.314 10.6822 16.1558 10.4773 15.9493 10.3957C15.3933 10.1762 15 9.63404 15 9.00006C15 8.36608 15.3933 7.82396 15.9493 7.6044C16.1558 7.52282 16.314 7.31789 16.258 7.10298C16.085 6.43932 15.8234 5.81145 15.4866 5.23275C15.3712 5.0344 15.1025 5.00563 14.8954 5.1045C14.6999 5.19782 14.4811 5.25006 14.25 5.25006C13.4216 5.25006 12.75 4.57849 12.75 3.75006C12.75 3.519 12.8023 3.30014 12.8956 3.10466C12.9944 2.89754 12.9657 2.62892 12.7673 2.51347C12.1886 2.17665 11.5608 1.91505 10.8971 1.74206C10.6822 1.68605 10.4773 1.84425 10.3957 2.05082C10.1761 2.60675 9.634 3.00006 9.00002 3.00006C8.36603 3.00006 7.82392 2.60675 7.60435 2.05082Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M13.5 9.00006C13.5 11.4853 11.4853 13.5001 9.00002 13.5001C6.51473 13.5001 4.50002 11.4853 4.50002 9.00006C4.50002 6.51478 6.51473 4.50006 9.00002 4.50006C11.4853 4.50006 13.5 6.51478 13.5 9.00006ZM9.00002 12.0001C10.6569 12.0001 12 10.6569 12 9.00006C12 7.34321 10.6569 6.00006 9.00002 6.00006C7.34316 6.00006 6.00002 7.34321 6.00002 9.00006C6.00002 10.6569 7.34316 12.0001 9.00002 12.0001Z" fill={color} />
  </svg>
);

export default ProfileSettingIcon;