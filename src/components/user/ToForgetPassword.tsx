import { css } from '@emotion/react';
import color from '@/styles/color';
import LinkWrapper from '@/components/common/link/LinkWrapper';

const ToForgetPassword = () => (
  // TODO: 비밀번호 찾기 페이지 구현하고 라우팅해야함
  <div css={textCSS}>
    <LinkWrapper linkUrl="/chats/0">
      {/* Forget password? */}
      바로 영준이랑 대화하기
    </LinkWrapper>
  </div>
);

export default ToForgetPassword;

const textCSS = css`
  margin: auto;
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;
  color: ${color.darkGreen};
`;
