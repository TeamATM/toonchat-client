import { FC } from 'react';

interface ChatContentProps { content: string }

const ChatContent: FC<ChatContentProps> = ({ content }) => (
  <div>
    {content}
  </div>
);

export default ChatContent;
