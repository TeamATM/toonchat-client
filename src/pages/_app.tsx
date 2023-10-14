import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { SessionProvider } from 'next-auth/react';
import GA from '@/components/common/head/GA';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '2e271a0d-bf2a-4465-8ef1-59bd1c2eceb7',
  clientToken: 'pub30feb69c70c140b8f84ae56e3fea50f7',
  site: 'ap1.datadoghq.com',
  service: 'front',
  env: 'staging-1',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

datadogRum.startSessionReplayRecording();

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
