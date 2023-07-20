import type { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import LoadingContent from './characterChatContent/LoadingContent';
import ChatContent from './characterChatContent/ChatContent';

interface CharacterSpeakProps {
  speaker:string, content: string, timestamp: number, loading: boolean,
}

const CharacterSpeak: FC<CharacterSpeakProps> = ({
  speaker, content, timestamp, loading = false,
}) => (
  <span css={characterSpeakCSS}>
    <Image
      src="/leeyj.png"
      width={40}
      height={40}
      style={imageStyle}
      alt="이영준"
    />
    <span css={chatContainerCSS}>
      <span css={characterNameCSS}>{speaker}</span>
      {loading ? <LoadingContent />
        : <ChatContent content={content} timestamp={timestamp} /> }
    </span>
  </span>
);

export default CharacterSpeak;

const characterSpeakCSS = css`
  width: 100%;
  margin-top: 3px;
  margin-bottom: 10px;
  display: flex;
`;

const chatContainerCSS = css`
  display: flex;
  flex-direction: column;
  margin-right: 5%;
`;

const characterNameCSS = css`
  font-size: 14px;
  padding: 1px;
`;

const imageStyle = {
  borderRadius: '50%',
  margin: '5px',
};
