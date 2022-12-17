import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import type { ComponentType } from 'react';
import { getClient } from '@lib/apollo/apolloClient';
import { APOLLO_STATE_PROP_NAME } from '@lib/utils/sharedConsts';
import getNextRouterFromCtx from './getNextRouterFromCtx';

type IGetServerSideProps<P> = (
  ctx: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<P>>;

interface WithServerSidePreFetch<T> {
  Page: ComponentType;
  getServerSideProps?: IGetServerSideProps<T>;
}

export interface WithServerSidePreFetchResult {
  [APOLLO_STATE_PROP_NAME]: NormalizedCacheObject;
}

export default function getServerSidePreFetch<
  P extends WithServerSidePreFetchResult
>({ getServerSideProps, Page }: WithServerSidePreFetch<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const client = getClient();
    const router = getNextRouterFromCtx(ctx);
    await getDataFromTree(
      <RouterContext.Provider value={router}>
        <ApolloProvider client={client}>
          <Page />
        </ApolloProvider>
      </RouterContext.Provider>
    );
    const initialState = client.cache.extract();

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
