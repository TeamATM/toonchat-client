import type { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import color from '@/styles/color';

interface CharacterSpeakProps { speaker:string }

const CharacterLoading: FC<CharacterSpeakProps> = ({ speaker }) => (
  <span css={characterLoadingCSS}>
    <Image
      src="/leeyj.png"
      width={40}
      height={40}
      style={imageStyle}
      alt="이영준"
    />
    <span css={chatContainerCSS}>
      <span css={characterNameCSS}>{speaker}</span>
      <span css={characterChatBoxCSS}>
        <Image
          src="/chat-loading.gif"
          width={20}
          height={20}
          alt="로딩"
        />
      </span>
    </span>
  </span>
);

export default CharacterLoading;

const characterLoadingCSS = css`
  width: 100%;
  margin-top: 3px;
  margin-bottom: 10px;
  display: flex;
`;

const chatContainerCSS = css`
  display: flex;
  flex-direction: column;
  margin-right: 5%;
`;

const characterNameCSS = css`
  font-size: 14px;
  padding: 1px;
`;

const characterChatBoxCSS = css`
  float: left;
  text-align: left;
  font-size: 12px;
  color: ${color.black};
  background-color: #F2F7FB;
  border-radius: 0px 10px 10px 10px;
  padding: 12px;
`;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};
