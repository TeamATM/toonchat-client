import { css } from '@emotion/react';
import color from '@/styles/color';
import LinkWrapper from '@/components/common/link/LinkWrapper';

const ToForgetPassword = () => (
  <div css={textCSS}>
    <LinkWrapper linkUrl="/chats/0">
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
