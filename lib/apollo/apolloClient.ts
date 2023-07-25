import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import type { User } from '@firebase/auth';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import type BaseObject from '@lib/utils/BaseObject';
import { APOLLO_STATE_PROP_NAME, getGraphqlURL } from '@lib/utils/sharedConsts';
import typePolicies from './typePolicies';

let apolloClient: ApolloClient<NormalizedCacheObject>;
let user: User;

export interface ICreateApolloClient {
  graphQLUrl?: string;
  locale?: string;
}

export const createApolloClient = ({
  graphQLUrl = getGraphqlURL(),
  locale = 'EN-US',
}: ICreateApolloClient) => {
  const setAuthorizationLink = setContext(async (_, { headers }) => {
    const baseHeaders = {
      ...headers,
      'Accept-Language': locale,
    };
    // This means we set the auth inline for create user
    if (headers?.authorization) return { headers: baseHeaders };
    if (user) {
      const token = await user.getIdToken();
      if (token)
        return {
          headers: {
            ...baseHeaders,
            authorization: `Bearer ${token}`,
          },
        };
    }
    return { headers: baseHeaders };
  });
  const link = new HttpLink({
    uri: graphQLUrl,
    credentials: 'same-origin',
  });
  const cache = new InMemoryCache({ typePolicies });
  return new ApolloClient({
    cache,
    ssrMode: typeof window === 'undefined',
    link: setAuthorizationLink.concat(link),
  });
};

interface IInitializeApollo {
  initialState?: NormalizedCacheObject;
  options?: ICreateApolloClient;
}

export const initializeApollo = ({
  initialState,
  options = {},
}: IInitializeApollo) => {
  const _apolloClient = apolloClient ?? createApolloClient(options);

  if (initialState) {
    const existingCache = _apolloClient.extract();
    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s)),
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
};

export const useApollo = (
  pageProps: BaseObject,
  options: ICreateApolloClient,
) => {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(
    () => initializeApollo({ initialState, options }),
    [initialState, options],
  );
  return store;
};

export const getClient = (props?: IInitializeApollo) =>
  initializeApollo({ ...props });

export const setTokenFn = (_user: User) => (user = _user);
