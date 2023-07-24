import ToonChatHead from '@/components/head/ToonChatHead';
import GlobalStyles from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ToonChatHead />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
