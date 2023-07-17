import type { FC } from 'react';
import { css } from '@emotion/react';
import color from '@/styles/color';

interface TimestampProps {
  timestamp: number
}

const TimeStamp: FC<TimestampProps> = ({ timestamp }) => (
  <span css={timestampCSS}>{makeDate(timestamp)}</span>
);

export default TimeStamp;

const makeDate = (timestamp : number) => {
  const dateObject = new Date(timestamp);
  let hour = dateObject.getHours();
  const ampm = hour > 12 ? 'PM' : 'AM';
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour += 12;
  }
  const minute = dateObject.getMinutes();
  return `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`;
};

const timestampCSS = css`
  color: ${color.greenGray};
  font-size: 10px;
  padding: 3px;
`;
