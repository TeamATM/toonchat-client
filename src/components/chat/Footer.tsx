// 채팅 입력하는 부분이 생길 예정
import { useState, ChangeEvent, FormEvent } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import useChatStore from '@/store/chat';

const Footer = () => {
  const {
    addChatContents, idCounter, increaseIdCounter,
  } = useChatStore();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let result = null;
    if (message) {
      const timestamp = Date.now();
      addChatContents({
        id: idCounter, speaker: 'me', content: message, timestamp,
      });
      increaseIdCounter();
      setMessage('');

      // TODO: AI의 대답으로 수정될 부분 (API 호출했다고 가정)
      result = await callLeeyjAPI(timestamp);
    }
    return result;
  };

  const callLeeyjAPI = async (timestamp: number) => {
    const response = await fetch('/api/hello');
    const jsonData = await response.json();

    // 함수의 input값인 message, timestamp를 아직 안쓰고 있어서 콘솔로그 찍어놓음
    console.log(message, timestamp);

    addChatContents({
      id: idCounter + 1, speaker: '이영준', content: jsonData.say, timestamp: Date.now(),
    });
    increaseIdCounter();
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
