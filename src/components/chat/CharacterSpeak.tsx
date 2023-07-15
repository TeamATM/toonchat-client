import type { FC } from 'react';
import { css } from '@emotion/react';

interface CharacterSpeakProps {
  speaker:string, content: string
}

const CharacterSpeak: FC<CharacterSpeakProps> = ({ speaker, content }) => (
  <span css={css`width:100%; margin-top:3px;`}>
    <span>{speaker}</span>
    <span css={characterSpeakCSS}>
      {content}
    </span>
  </span>
);

export default CharacterSpeak;

const characterSpeakCSS = css`
  float:left;
  text-align: right;
  font-size: 15px;
  color: #000E08;
  background-color: #F2F7FB;
  border-radius: 0px 10px 10px 10px;
  padding: 15px;
`;
