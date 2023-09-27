import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  </>
);

export default App;
