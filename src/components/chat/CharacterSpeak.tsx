import type { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

interface CharacterSpeakProps {
  speaker:string, content: string
}

const CharacterSpeak: FC<CharacterSpeakProps> = ({ speaker, content }) => (
  <span css={css`width:100%; margin-top:3px; display:flex; `}>
    <Image
      src="/leeyj.png"
      width={40}
      height={40}
      style={imageStyle}
      alt="이영준"
    />
    <span css={css`display: flex; flex-direction: column;`}>
      <span css={css`font-size:14px; padding:1px;`}>{speaker}</span>
      <span css={characterSpeakCSS}>
        {content}
      </span>
    </span>
  </span>
);

export default CharacterSpeak;

const characterSpeakCSS = css`
  float:left;
  text-align: left;
  font-size: 12px;
  color: #000E08;
  background-color: #F2F7FB;
  border-radius: 0px 10px 10px 10px;
  padding: 12px;
`;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};
