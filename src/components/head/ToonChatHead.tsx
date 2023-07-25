import Head from 'next/head';
import { FC } from 'react';

interface ToonChatHeadProps {
  title: string,
}

const ToonChatHead: FC<ToonChatHeadProps> = ({ title }) => (
  <Head>
    <title>
      {`ToonChat | ${title}`}
    </title>
  </Head>
);

export default ToonChatHead;
