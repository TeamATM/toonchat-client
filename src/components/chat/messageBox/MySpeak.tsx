import type { FC } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';
import TimeStamp from './TimeStamp';

interface MySpeakProps {
  content: string, timestamp: number
}

const MySpeak: FC<MySpeakProps> = ({ content, timestamp }) => (
  <span css={mySpeakCSS}>
    <div css={chatContainerCSS}>
      <span css={myChatBoxCSS}>
        {content}
      </span>
      <TimeStamp timestamp={timestamp} />
    </div>
  </span>
);

export default MySpeak;

const mySpeakCSS = css`
  width: 100%;
  margin-top: 0.25rem;
`;

const chatContainerCSS = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  margin-right: 1rem;
`;

const myChatBoxCSS = css`
  margin-left: 0.25rem;
  text-align: right;
  font-size: 0.75rem;
  color: #fff;
  background-color: ${color.lightGreen};
  border-radius: 0.75rem 0 0.75rem 0.75rem;
  padding: 0.75rem;
`;
