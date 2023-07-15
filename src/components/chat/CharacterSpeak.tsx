import type { FC } from 'react';

interface CharacterSpeakProps {
  speaker:string, content: string
}

const CharacterSpeak: FC<CharacterSpeakProps> = ({ speaker, content }) => (
  <>
    <div>{speaker}</div>
    <div>{content}</div>
  </>
);

export default CharacterSpeak;
