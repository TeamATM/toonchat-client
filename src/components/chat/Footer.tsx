// 채팅 입력하는 부분이 생길 예정
import { useState, ChangeEvent, FormEvent } from 'react';
import type { FC } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';

interface FooterProps {
  // TODO: 혜성 엑스퍼트의 HELP. message 변수를 잘 쓰고 있는데 ESLint가 억까하는 중입니다.
  // eslint-disable-next-line no-unused-vars
  addChatContents: (message: string, timestamp: number) => void;
}

const Footer: FC<FooterProps> = ({ addChatContents }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (message) {
      addChatContents(message, Date.now());
      setMessage('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <footer css={footerCSS}>
      <form css={formCSS} onSubmit={handleSubmit}>
        <input css={inputCSS} type="text" maxLength={100} value={message} onChange={handleChange} required />
        <button css={buttonCSS} type="submit">
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

export default Footer;

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
