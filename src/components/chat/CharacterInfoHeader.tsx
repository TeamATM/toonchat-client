import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

const CharacterInfoHeader = () => (
  <>
    <Link href="/">
      <Image
        src="/back.svg"
        alt="back"
        width={24}
        height={24}
        priority
      />
    </Link>
    <Image
      src="/leeyj.png"
      width={44}
      height={44}
      style={imageStyle}
      alt="이영준"
    />
    <div>
      <div css={characterNameCSS}>이영준</div>
      <div css={characterBackgroundCSS}>#네이버웹툰 #김비서가왜그럴까</div>
    </div>
  </>
);

export default CharacterInfoHeader;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};

const characterNameCSS = css`
  text-align: left;
  font-size: 16px;
  color: #000e08;
`;

const characterBackgroundCSS = css`
  font-size: 12px;
  color: #797C7B;
`;