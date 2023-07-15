import type { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

interface CharacterSpeakProps {
  speaker:string, content: string, date: number
}

const CharacterSpeak: FC<CharacterSpeakProps> = ({ speaker, content, date }) => (
  <span css={css`width:100%; margin-top:3px; margin-bottom: 10px; display:flex; `}>
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
      <span css={timestampCSS}>{makeDate(date)}</span>
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

const timestampCSS = css`
  color: #797C7B;
  font-size: 10px;
  padding: 3px;
`;

const makeDate = (date : number) => {
  const dateObject = new Date(date);
  let hour = dateObject.getHours();
  const ampm = hour > 12 ? 'PM' : 'AM';
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour += 12;
  }
  const minute = dateObject.getMinutes();
  return `${hour}:${minute} ${ampm}`;
};
