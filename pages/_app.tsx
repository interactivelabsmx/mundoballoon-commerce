import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { Suspense } from 'react';
import 'styles/index.css';
import AppContexts from '@providers/AppContexts';
import { CommerceProvider } from '@providers/CommerceProvider';
import { IAuthProvider } from '../providers/AuthProvider';

const AuthProviderLoader = dynamic<IAuthProvider>(
  () => import('@providers/AuthProvider').then((module) => module.AuthProvider),
  { ssr: false }
);

const App = ({ Component, pageProps }: AppProps) => (
  <Suspense fallback="...Loading">
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
  </Suspense>
);

export default App;
