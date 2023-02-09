import type { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import 'styles/index.css';
import AppContextsProvider from '@providers/AppContextsProvider';
import type { IAuthProvider } from '../providers/AuthProvider';

const AuthProviderLoader = dynamic<IAuthProvider>(() =>
  import('@providers/AuthProvider').then((module) => module.AuthProvider)
);

const App = ({ Component, pageProps }: AppProps) => (
  <AuthProviderLoader>
    <AppContextsProvider pageProps={pageProps}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Mundo Balloon</title>
      </Head>
      <Component {...pageProps} />
    </AppContextsProvider>
  </AuthProviderLoader>
);

export default App;
