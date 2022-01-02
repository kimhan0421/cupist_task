import { ThemeProvider } from '@emotion/react';
import { Provider } from 'mobx-react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ProfileInstance as profileStore } from '../store/Profile';
import { RecomProfilesInstance as recomProfilesStore } from '../store/RecomProfiles';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cupist</title>
      </Head>
      <main>
        <Provider ProfileStore={profileStore} RecomProfilesStore={recomProfilesStore}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </main>
    </>
  );
}

export default MyApp;
