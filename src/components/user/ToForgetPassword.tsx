import color from '@/styles/color';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const ToForgetPassword = () => (
  // TODO: 비밀번호 찾기 페이지 구현하고 라우팅해야함
  <div css={textCSS}>
    <Link href="/user/login" passHref legacyBehavior>
      <RedLink href="/user/login">
        Forget password?
      </RedLink>
    </Link>
  </div>
);

export default ToForgetPassword;

const RedLink = styled.a`
  color: ${color.darkGreen};
  font-size: 14px;
  text-decoration: none;

  &:active {
    color: ${color.lightGreen};
    text-decoration: none;
  }
`;

const textCSS = css`
  margin: auto;
  text-align: center;
  font-size: 14px;
`;
