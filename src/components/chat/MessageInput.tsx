// 채팅 입력하는 부분이 생길 예정
import {
  useState, ChangeEvent, FormEvent, FC, useRef, useEffect,
} from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import useSocketStore from '@/store/socket';
import Dialog from '../dialog/Dialog';

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

  useEffect(() => {
    const handleFocus = () => {
      if (inputRef.current) {
        window.scrollTo(0, inputRef.current.offsetTop - 100); // 100은 여백 (해보고 바꿔야함)
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
      sendMessage(message);
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
  position: sticky;
  bottom: 0;
  width: 100%;
  padding-top: 0.5rem;
  background-color: ${color.white};
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
