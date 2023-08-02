import Image from 'next/image';
import { css } from '@emotion/react';
import color from '@/styles/color';

const LoadingContent = () => (
  <span css={characterChatBoxCSS}>
    <Image
      src="/chat-loading.gif"
      width={20}
      height={20}
      alt="로딩"
    />
  </span>
);

export default LoadingContent;

const characterChatBoxCSS = css`
  float: left;
  text-align: left;
  font-size: 0.75rem;
  color: ${color.black};
  background-color: #F2F7FB;
  border-radius: 0.75rem 0.75rem 0.75rem;
  padding: 0.75rem;
`;
