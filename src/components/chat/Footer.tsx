// 채팅 입력하는 부분이 생길 예정
import { useState, ChangeEvent, FormEvent } from 'react';
import type { FC } from 'react';

interface FooterProps {
  // TODO: 혜성 엑스퍼트의 HELP. message 변수를 잘 쓰고 있는데 ESLint가 억까하는 중입니다.
  // eslint-disable-next-line no-unused-vars
  addChatContents: (message: string) => void;
}

const Footer: FC<FooterProps> = ({ addChatContents }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (message) {
      addChatContents(message);
      setMessage('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </footer>
  );
};

export default Footer;
