import { FC } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

interface ChatBadgeProps {
  unreadCount: boolean
}

const ChatBadge: FC<ChatBadgeProps> = ({ unreadCount }) => (
  <div css={countCSS(unreadCount)}>{unreadCount ? '0' : '1'}</div>
);

export default ChatBadge;

const countCSS = (unreadCount : boolean) => css`
  visibility : ${unreadCount ? 'hidden' : 'visible'};
  background-color: #F04A4C;
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  color: ${color.white};
  font-size: 0.75rem;
  text-align: center;
  margin: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
