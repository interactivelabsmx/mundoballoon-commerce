import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { parseCookies } from 'nookies';
import type { ComponentType } from 'react';
import { getClient } from '@lib/apollo/apolloClient';
import { APOLLO_STATE_PROP_NAME } from '@lib/utils/sharedConsts';
import { FI } from '@providers/AuthProvider';
import getNextRouterFromCtx from './getNextRouterFromCtx';

if (getApps().length < 1) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_PRIVATE_KEY || '{}')),
    projectId: 'mundoballoon-dev',
  });
}

type IGetServerSideProps<P> = (
  ctx: GetServerSidePropsContext,
) => Promise<GetServerSidePropsResult<P>>;

interface WithServerSidePreFetch<T> {
  Page: ComponentType;
  getServerSideProps?: IGetServerSideProps<T>;
}

export interface WithServerSidePreFetchResult {
  [APOLLO_STATE_PROP_NAME]: NormalizedCacheObject;
}

export default function getServerSidePreFetch<
  P extends WithServerSidePreFetchResult,
>({ getServerSideProps, Page }: WithServerSidePreFetch<P>) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const { req } = ctx;

    const client = getClient();
    const router = getNextRouterFromCtx(ctx);
    const cookies = parseCookies({ req });
    const token = cookies[FI];

    let apolloHeaders = {};
    if (token) {
      apolloHeaders = { authorization: `Bearer ${token}` };
    }

    let initialState = {};
    try {
      await getDataFromTree(
        <RouterContext.Provider value={router}>
          <ApolloProvider client={client}>
            <Page />
          </ApolloProvider>
        </RouterContext.Provider>,
        { headers: apolloHeaders },
      );
      initialState = client.cache.extract();
    } catch {
      // Purposfully Empty to Avoid SSR to show something
    }

    if (getServerSideProps) {
      const result = await getServerSideProps(ctx);
      if ('props' in result)
        return {
          props: {
            ...result.props,
            [APOLLO_STATE_PROP_NAME]: initialState,
          } as P,
        };
      if ('redirect' in result) return { redirect: { ...result.redirect } };
      if ('notFound' in result) return { notFound: result.notFound };
    }

    return { props: { [APOLLO_STATE_PROP_NAME]: initialState } as P };
  };
}
