// 채팅 입력하는 부분이 생길 예정
import {
  useState, ChangeEvent, FormEvent, FC, useRef, useEffect,
} from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import useSocketStore from '@/store/socket';
import useAIParameterStore from '@/store/aiParameter';
import Dialog from '../common/dialog/Dialog';

interface CharacterState {
  characterId: string,
  characterName: string
}

// const MessageInput : FC<CharacterState> = ({ characterId, characterName }) => {
const MessageInput : FC<CharacterState> = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useSocketStore();
  const { temperatureParam, repetitionPenaltyParam } = useAIParameterStore();

  useEffect(() => {
    const handleFocus = () => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    };
    if (inputRef.current) {
      inputRef.current.addEventListener('focus', handleFocus);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('focus', handleFocus);
      }
    };
  }, []);

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
      /**
       * AI의 대답 호출
      */
      // TODO: 메시지가 도착할 떄까지 loading이 true여야하는데. 소켓이라 컨트롤이 필요함.
      sendMessage(message, temperatureParam, repetitionPenaltyParam);
      setMessage('');
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
  position: fixed;
  bottom: 0;
  width: 400px;
  padding-top: 0.5rem;
  background-color: ${color.white};
  text-align: left;
  font-size: 0.75rem;
  color: ${color.black};
`;

const formCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

const buttonCSS = css`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`;

const inputCSS = css`
  width: 100%;
  border: none;
  border-radius: 0.75rem;
  background-color: ${color.offWhite};
  height: 2.5rem;
  padding: 0.75rem;
  margin-right: 0.625rem;

  &:focus {
    outline: none;
  }
`;
