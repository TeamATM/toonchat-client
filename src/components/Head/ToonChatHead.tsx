import Head from 'next/head';

const ToonChatHead = () => (
  <Head>
    <title>ToonChat</title>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="author" content="Team ATM" />
    <meta name="description" content="최애 캐릭터와의 1:1 대화 | ToonChat" />
    <meta name="robots" content="index,nofollow" />

    <meta name="apple-mobile-web-app-title" content="ToonChat" />

    {/* OG */}
    <meta name="og:site_name" content="ToonChat" />
    <meta name="og:title" content="ToonChat" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="/thumbnail.png" />
    <meta property="og:image" content="/thumbnail.png" />
    <meta name="og:description" content="최애 캐릭터와의 1:1 대화 | ToonChat" />

    {/* 트위터 */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="ToonChat" />
    <meta name="twitter:description" content="최애 캐릭터와의 1:1 대화 | ToonChat" />
    <meta name="twitter:image" content="/thumbnail.png" />
  </Head>
);

export default ToonChatHead;
