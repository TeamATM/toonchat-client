import { css } from '@emotion/react';
import {
  FC, ChangeEvent, Dispatch, SetStateAction,
} from 'react';
import color from '@/styles/color';

interface PasswordInputProps {
  text: string, value: string, setState: Dispatch<SetStateAction<string>>,
}

// TODO: 회원가입, 로그인시 비밀번호 길이 제약이 필요함
const PasswordInput: FC<PasswordInputProps> = ({ text, value, setState }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <>
      <div css={textCSS}>{text}</div>
      <input
        type="password"
        value={value}
        onChange={handleInputChange}
        css={inputTagCSS}
        required
      />
    </>
  );
};

export default PasswordInput;

const textCSS = css`
  font-size: 0.875rem;
  color: ${color.lightGreen};
`;

const inputTagCSS = css`
  display: block;
  width: 100%;
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
  padding: 0.25rem;
  font-size: 1rem;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid ${color.lightGray};
`;
