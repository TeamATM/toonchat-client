import color from '@/styles/color';
import { css } from '@emotion/react';
import { FC } from 'react';

interface InputProps {
  text: string, inputType: 'email' | 'password' | 'text',
}

// TODO: 회원가입, 로그인시 비밀번호 길이, 닉네임 길이 등 제약이 필요함
const Input: FC<InputProps> = ({ text, inputType }) => (
  <>
    <div css={textCSS}>{text}</div>
    <input type={inputType} css={inputTagCSS} required />
  </>
);

export default Input;

const textCSS = css`
  font-size: 14px;
  color: ${color.lightGreen};
`;

const inputTagCSS = css`
  display: block;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 30px;
  padding: 5px;
  font-size: 16px;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid ${color.greenGray};
`;
