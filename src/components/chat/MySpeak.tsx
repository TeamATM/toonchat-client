import type { FC } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';
import TimeStamp from './TimeStamp';

interface MySpeakProps {
  content: string, timestamp: number
}

const MySpeak: FC<MySpeakProps> = ({ content, timestamp }) => (
  <span css={css`width:100%; margin-top:3px;`}>
    <div css={css`display: flex; flex-direction: column; align-items: flex-end; margin-right:15px;`}>
      <span css={myChatBoxCSS}>
        {content}
      </span>
      <TimeStamp timestamp={timestamp} />
    </div>
  </span>
);

export default MySpeak;

const myChatBoxCSS = css`
  margin-left: 5%;
  text-align: right;
  font-size: 12px;
  color: #fff;
  background-color: ${color.lightGreen};
  border-radius: 10px 0px 10px 10px;
  padding: 12px;
`;
