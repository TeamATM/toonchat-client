import type { FC } from 'react';
import { css } from '@emotion/react';
import TimeStamp from './TimeStamp';

interface MySpeakProps {
  content: string, timestamp: number
}

const MySpeak: FC<MySpeakProps> = ({ content, timestamp }) => (
  <span css={css`width:100%; margin-top:3px; margin-right:15px;`}>
    <div css={css`display: flex; flex-direction: column; align-items: flex-end;`}>
      <span css={mySpeakCSS}>
        {content}
      </span>
      <TimeStamp timestamp={timestamp} />
    </div>
  </span>
);

export default MySpeak;

const mySpeakCSS = css`
  max-width: 80%;
  text-align: right;
  font-size: 12px;
  color: #fff;
  background-color: #20A090;
  border-radius: 10px 0px 10px 10px;
  padding: 12px;
`;
