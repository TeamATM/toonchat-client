import type { FC } from 'react';
import { css } from '@emotion/react';

interface MySpeakProps {
  content: string, date: number
}

const MySpeak: FC<MySpeakProps> = ({ content, date }) => (
  <span css={css`width:100%; margin-top:3px;`}>
    <div css={css`display: flex; flex-direction: column; align-items: flex-end;`}>
      <span css={mySpeakCSS}>
        {content}
      </span>
      <span css={timestampCSS}>{makeDate(date)}</span>
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

const timestampCSS = css`
  color: #797C7B;
  font-size: 10px;
  padding: 3px;
`;

const makeDate = (date : number) => {
  const dateObject = new Date(date);
  let hour = dateObject.getHours();
  const ampm = hour > 12 ? 'PM' : 'AM';
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour += 12;
  }
  const minute = dateObject.getMinutes();
  return `${hour}:${minute} ${ampm}`;
};
