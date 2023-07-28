import color from '@/styles/color';
import { css } from '@emotion/react';
import {
  FC, useState, ChangeEvent, Dispatch, SetStateAction,
} from 'react';

interface PasswordInputProps {
  text: string, value: string, setState: Dispatch<SetStateAction<string>>,
}

// TODO: 회원가입, 로그인시 비밀번호 길이 제약이 필요함
const PasswordInput: FC<PasswordInputProps> = ({ text, value, setState }) => {
  const [display, setDisplay] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    setDisplay('*'.repeat(e.target.value.length));
  };

  return (
    <>
      <div css={textCSS}>{text}</div>
      <input
        type="password"
        value={value}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        required
      />
      <input
        type="text"
        value={display}
        onChange={handleInputChange}
        css={inputTagCSS}
        required
      />
    </>
  );
};

export default PasswordInput;

const textCSS = css`
  font-size: 14px;
  color: ${color.lightGreen};
`;

const inputTagCSS = css`
  display: block;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 15px;
  padding: 5px;
  font-size: 16px;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid ${color.lightGray};
`;
