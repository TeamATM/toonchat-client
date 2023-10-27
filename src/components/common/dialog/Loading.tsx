import { css } from '@emotion/react';
import Image from 'next/image';

const Loading = () => (
  <div css={loadingCSS}>
    <div css={loadingContentsCSS}>
      <Image
        src="/spinnig-loading.gif"
        width={50}
        height={50}
        alt="로딩"
        priority
      />
    </div>
    <div css={dialogBackdropCSS} />
  </div>
);

export default Loading;

const loadingCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const loadingContentsCSS = () => css`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const dialogBackdropCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  z-index: 1;
`;
