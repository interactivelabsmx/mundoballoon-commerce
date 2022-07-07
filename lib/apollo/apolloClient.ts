import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import BaseObject from '@lib/utils/BaseObject';
import { APOLLO_STATE_PROP_NAME, GRAPHQL_URL } from '@lib/utils/sharedConsts';
import typePolicies from './typePolicies';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export interface ICreateApolloClient {
  graphQLUrl?: string;
  getToken?: () => Promise<string> | string;
}

function createApolloClient({
  graphQLUrl = GRAPHQL_URL,
  getToken,
}: ICreateApolloClient) {
  const setAuthorizationLink = setContext(async (_, { headers }) => {
    // This means we set the auth inline for create user
    if (headers?.authorization) return { headers };
    const token = getToken && (await getToken());
    if (token)
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    return { headers };
  });
  const link = createUploadLink({
    uri: graphQLUrl,
    credentials: 'same-origin',
  }) as unknown as ApolloLink;
  const cache = new InMemoryCache({ typePolicies });
  return new ApolloClient({
    cache,
    ssrMode: typeof window === 'undefined',
    link: setAuthorizationLink.concat(link),
  });
}

interface IInitializeApollo {
  initialState?: NormalizedCacheObject;
  options?: ICreateApolloClient;
}

export function initializeApollo({
  initialState,
  options = {},
}: IInitializeApollo) {
  const _apolloClient = apolloClient ?? createApolloClient(options);

  if (initialState) {
    const existingCache = _apolloClient.extract();
    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(pageProps: BaseObject, options: ICreateApolloClient) {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(
    () => initializeApollo({ initialState, options }),
    [initialState, options]
  );
  return store;
}

export const getClient = (props?: IInitializeApollo) =>
  initializeApollo({ ...props });
