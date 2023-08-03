import color from '@/styles/color';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const ToForgetPassword = () => (
  // TODO: 비밀번호 찾기 페이지 구현하고 라우팅해야함
  <div css={textCSS}>
    <Link href="/chats/0" passHref legacyBehavior>
      <RedLink>
        {/* Forget password? */}
        바로 영준이랑 대화하기
      </RedLink>
    </Link>
  </div>
);

export default ToForgetPassword;

const RedLink = styled.a`
  color: ${color.darkGreen};
  font-size: 1rem;
  text-decoration: none;

  &:active {
    color: ${color.lightGreen};
    text-decoration: none;
  }
`;

const textCSS = css`
  margin: auto;
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;
`;
