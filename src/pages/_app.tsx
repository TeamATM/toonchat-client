import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { SessionProvider } from 'next-auth/react';
import GA from '@/components/common/head/GA';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <GA />
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  </>
);

export default App;
