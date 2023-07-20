// 채팅 입력하는 부분이 생길 예정
import {
  useState, ChangeEvent, FormEvent, FC,
} from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import useChatStore from '@/store/chat';

interface CharacterState {
  characterId: string,
  characterName: string
}

const MessageInput : FC<CharacterState> = ({ characterId, characterName }) => {
  const { addChatContents, loadedChat } = useChatStore();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let result = null;
    if (message) {
      const timestamp = Date.now();
      addChatContents({ speaker: 'me', content: message, timestamp });
      setMessage('');

      // TODO: AI의 대답으로 수정될 부분 (API 호출했다고 가정)
      result = await callLeeyjAPI(timestamp);
    }
    setLoading(false);
    return result;
  };

  const callLeeyjAPI = async (timestamp: number) => {
    const index = addChatContents({
      speaker: characterName, content: 'loading', timestamp: 0, loading: true,
    });
    const response = await fetch(`/api/${characterId}`);
    const jsonData = await response.json();

    // 함수의 input값인 message, timestamp를 아직 안쓰고 있어서 콘솔로그 찍어놓음
    console.log(message, timestamp);

    loadedChat(index, jsonData.say, Date.now());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <footer css={footerCSS}>
      <form css={formCSS} onSubmit={handleSubmit}>
        <input css={inputCSS} type="text" maxLength={100} value={message} onChange={handleChange} required />
        <button css={buttonCSS} type="submit" disabled={loading}>
          <Image
            src="/send.svg"
            alt="send"
            width={40}
            height={40}
            priority
          />
        </button>
      </form>
    </footer>
  );
};

export default MessageInput;

const footerCSS = css`
  width: 100%;
  text-align: left;
  font-size: 12px;
  color: ${color.black};
`;

const formCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-left: 5px;
  padding-right: 5px;
`;

const buttonCSS = css`
  background: none;
  border: none;
`;

const inputCSS = css`
  width: 100%;
  border: none;
  border-radius: 12px;
  background-color: ${color.offWhite};
  height: 40px;
  padding: 12px;
  margin-right: 10px;

  &:focus {
    outline: none;
  }
`;
