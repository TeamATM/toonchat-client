import { FC } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';
import TimeStamp from '../TimeStamp';

interface ChatContentProps {
  content: string, timestamp: number
}

const ChatContent: FC<ChatContentProps> = ({ content, timestamp }) => (
  <>
    <span css={characterChatBoxCSS}>
      {content}
    </span>
    <TimeStamp timestamp={timestamp} />
  </>
);

export default ChatContent;

const characterChatBoxCSS = css`
  float: left;
  text-align: left;
  font-size: 12px;
  color: ${color.black};
  background-color: #F2F7FB;
  border-radius: 0px 10px 10px 10px;
  padding: 12px;
`;
