// 채팅 입력하는 부분이 생길 예정
import {
  useState, ChangeEvent, FormEvent, FC, useRef,
} from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import useChatStore from '@/store/chat';
import useSocketStore from '@/store/socket';
import Dialog from '../dialog/Dialog';

interface CharacterState {
  characterId: string,
  characterName: string
}

const MessageInput : FC<CharacterState> = ({ characterId, characterName }) => {
  const { addChatContents, loadedChat } = useChatStore();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useSocketStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isModalOpen) {
      return;
    }

    if (loading) {
      openModal();
      return;
    }
    if (message) {
      setLoading(true);
      const timestamp = Date.now();
      addChatContents({
        speaker: 'me', content: message, timestamp, loading: true,
      });
      setMessage('');

      // TODO: AI의 대답으로 수정될 부분 (API 호출했다고 가정)
      await callLeeyjAPI(timestamp);

      /**
       * AI의 대답으로 수정된 부분
       * addChatContents (speaker: me)와 callLeeyjAPI 기능을 포함하고 있음
       */
      sendMessage(message);

      setLoading(false);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    inputRef.current?.focus();
  };

  const callLeeyjAPI = async (timestamp: number) => {
    const loadingTimestamp = addChatContents({
      speaker: characterName, content: 'loading', timestamp: Date.now() + new Date('2100-12-31 00:00:00').getTime(), loading: true,
    });

    const response = await fetch(`/api/chat/${characterId}`, { method: 'POST' });
    const jsonData = await response.json();

    // 함수의 input값인 message, timestamp를 아직 안쓰고 있어서 콘솔로그 찍어놓음
    console.log(message, timestamp);

    loadedChat(loadingTimestamp, jsonData.say, Date.now());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <footer css={footerCSS}>
      <form css={formCSS} onSubmit={handleSubmit}>
        <input css={inputCSS} type="text" maxLength={100} value={message} onChange={handleChange} ref={inputRef} required />
        <button css={buttonCSS} type="submit" disabled={isModalOpen}>
          <Image
            src="/send.svg"
            alt="send"
            width={40}
            height={40}
            priority
          />
        </button>
      </form>

      {isModalOpen && <Dialog closeModal={closeModal} theme="white">대답을 생각하는 중이에요!</Dialog>}
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
