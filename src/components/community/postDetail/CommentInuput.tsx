// 채팅 입력하는 부분이 생길 예정
import {
  useState, ChangeEvent, FormEvent, FC,
} from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import color from '@/styles/color';
import { createComment } from '@/utils/api/boards';

type postProps = {
  characterId: string | undefined;
  postId: string | undefined;
};

const CommentInput : FC<postProps> = ({ characterId, postId }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (message && characterId && postId) {
      createComment(characterId, postId, message);
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

export default CommentInput;

const footerCSS = css`
  position: sticky;
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
