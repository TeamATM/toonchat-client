import GlobalStyles from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
