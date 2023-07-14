// 채팅 입력하는 부분이 생길 예정
import { useState, ChangeEvent, FormEvent } from 'react';

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (message) {
      console.log(message);
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
