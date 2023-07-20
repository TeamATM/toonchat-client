import ToonChatHead from '@/components/head/ToonChatHead';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ToonChatHead />
    <Component {...pageProps} />
  </>
);

export default App;
