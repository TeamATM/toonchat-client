import type { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import color from '@/styles/color';
import TimeStamp from './TimeStamp';

interface CharacterSpeakProps {
  speaker:string, content: string, timestamp: number
}

const CharacterSpeak: FC<CharacterSpeakProps> = ({ speaker, content, timestamp }) => (
  <span css={css`width:100%; margin-top:3px; margin-bottom: 10px; display:flex; `}>
    <Image
      src="/leeyj.png"
      width={40}
      height={40}
      style={imageStyle}
      alt="이영준"
    />
    <span css={css`display: flex; flex-direction: column;   margin-right: 5%;`}>
      <span css={css`font-size:14px; padding:1px;`}>{speaker}</span>
      <span css={characterChatBoxCSS}>
        {content}
      </span>
      <TimeStamp timestamp={timestamp} />
    </span>
  </span>
);

export default CharacterSpeak;

const characterChatBoxCSS = css`
  float:left;
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
