import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { useApollo } from '@lib/apollo/apolloClient';
import { getCookieIdToken } from '@lib/firebaseAuth/utils';
import { GRAPHQL_URL } from '@lib/utils/sharedConsts';

interface IAppContexts {
  children: ReactNode;
  pageProps: any;
}

const AppContexts = ({ children, pageProps }: IAppContexts) => {
  const apolloClient = useApollo(pageProps, {
    graphQLUrl: process.env.GRAPHQL_URL || GRAPHQL_URL,
    getToken: getCookieIdToken,
  });
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AppContexts;
