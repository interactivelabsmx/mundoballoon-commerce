import type { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import 'styles/index.css';
import AppContexts from '@providers/AppContexts';
import { CommerceProvider } from '@providers/CommerceProvider';
import type { IAuthProvider } from '../providers/AuthProvider';

const AuthProviderLoader = dynamic<IAuthProvider>(() =>
  import('@providers/AuthProvider').then((module) => module.AuthProvider)
);

const App = ({ Component, pageProps }: AppProps) => (
  <AuthProviderLoader>
    <AppContexts pageProps={pageProps}>
      <CommerceProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Mundo Balloon</title>
        </Head>
        <Component {...pageProps} />
      </CommerceProvider>
    </AppContexts>
  </AuthProviderLoader>
);

export default App;
