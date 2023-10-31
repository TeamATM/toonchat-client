import { FC } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';
import TimeStamp from '@/components/common/timeStamp/TimeStamp';

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
  font-size: 0.75rem;
  color: ${color.black};
  background-color: ${color.offWhite};
  border-radius: 0 0.75rem 0.75rem 0.75rem;
  padding: 0.75rem;
`;
