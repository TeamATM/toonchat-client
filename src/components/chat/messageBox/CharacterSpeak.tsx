import type { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import LoadingContent from './characterChatContent/LoadingContent';
import ChatContent from './characterChatContent/ChatContent';

interface CharacterSpeakProps {
  speaker:string, content: string, timestamp: number, profileImageUrl: string, loading: boolean,
}

const CharacterSpeak: FC<CharacterSpeakProps> = ({
  speaker, content, timestamp, profileImageUrl, loading = false,
}) => (
  <span css={characterSpeakCSS}>
    <div css={imageWrapperCSS}>
      <Image
        src={profileImageUrl}
        alt={speaker}
        css={imageCSS}
        fill
      />
    </div>
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
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-self: flex-start;
`;

const chatContainerCSS = css`
  display: flex;
  flex-direction: column;
  margin-right: 0.25rem
`;

const characterNameCSS = css`
  font-size: 0.875rem;
  padding: 0.25rem;
`;

const imageWrapperCSS = css`
  margin: 0.25rem;
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  position: relative;
`;

const imageCSS = css`
  border-radius: 50%;
`;
