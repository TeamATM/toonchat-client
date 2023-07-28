import color from '@/styles/color';
import { css } from '@emotion/react';
import {
  ChangeEvent, Dispatch, FC, SetStateAction,
} from 'react';

interface InputProps {
  text: string, inputType: 'email' | 'text',
  value: string, setState: Dispatch<SetStateAction<string>>
}

// TODO: 회원가입, 로그인시 닉네임 길이 등 제약이 필요함
const Input: FC<InputProps> = ({
  text, inputType, value, setState,
}) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <>
      <div css={textCSS}>{text}</div>
      <input type={inputType} css={inputTagCSS} value={value} onChange={changeHandler} required />
    </>
  );
};
export default Input;

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
