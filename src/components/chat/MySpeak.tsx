import type { FC } from 'react';
import { css } from '@emotion/react';

interface MySpeakProps {
  content: string
}

const MySpeak: FC<MySpeakProps> = ({ content }) => (
  <span css={css`width:100%; margin-top:3px;`}>
    <span css={mySpeakCSS}>
      {content}
    </span>
  </span>
);

export default MySpeak;

const mySpeakCSS = css`
  float:right;
  text-align: right;
  font-size: 12px;
  color: #fff;
  background-color: #20A090;
  border-radius: 10px 0px 10px 10px;
  padding: 12px;
`;
