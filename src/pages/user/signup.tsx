import { css } from '@emotion/react';

const signup = () => (
  <section css={pageCSS}>Sign up page</section>
);

export default signup;

const pageCSS = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
