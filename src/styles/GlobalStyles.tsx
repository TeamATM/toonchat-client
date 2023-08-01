import { Global, css } from '@emotion/react';

const resetCSS = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  ol, ul {
    list-style: none;
  }
`;

const globalCSS = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

  ${resetCSS}

  :root {
    font-family: 'Nanum Gothic', sans-serif;
  }

  html {
    background-color: #D9D9D9;
  }

  body {
    width: 400px;
    margin: auto;
    background-color: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
  }

`;

const GlobalStyles = () => (
  <Global styles={globalCSS} />
);

export default GlobalStyles;
