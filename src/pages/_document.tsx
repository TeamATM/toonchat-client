import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="kr">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="icon" href="/logo.png" />
      <meta name="author" content="Team ATM" />
      <meta name="description" content="최애 캐릭터와의 1:1 대화 | ToonChat" />
      <meta name="robots" content="index,nofollow" />

      <meta name="apple-mobile-web-app-title" content="ToonChat" />

      {/* PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#FFFFFF" />
      {/* OG */}
      <meta property="og:site_name" content="ToonChat" />
      <meta property="og:title" content="ToonChat" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/thumbnail.png" />
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:description" content="최애 캐릭터와의 1:1 대화 | ToonChat" />

      {/* 트위터 */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="ToonChat" />
      <meta name="twitter:description" content="최애 캐릭터와의 1:1 대화 | ToonChat" />
      <meta name="twitter:image" content="/thumbnail.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
