import Head from 'next/head';
import { FC } from 'react';

interface SEOProps {
  title: string,
}

const SEO: FC<SEOProps> = ({ title }) => (
  <Head>
    <title>
      {`ToonChat | ${title}`}
    </title>
  </Head>
);

export default SEO;
