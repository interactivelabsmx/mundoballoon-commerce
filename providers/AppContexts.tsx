import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { useApollo } from '@lib/apollo/apolloClient';
import { getCookieIdToken } from '@lib/firebaseAuth/utils';
import BaseObject from '@lib/utils/BaseObject';
import { getGraphqlURL } from '@lib/utils/sharedConsts';

//import { useCommerce, usePersistLocaleCookie } from './CommerceProvider';

interface IAppContexts {
  children: ReactNode;
  pageProps: BaseObject;
}

const AppContexts = ({ children, pageProps }: IAppContexts) => {
  // const { locale } = useCommerce();
  const apolloClient = useApollo(pageProps, {
    graphQLUrl: getGraphqlURL(),
    getToken: getCookieIdToken,
    //locale, //Error
  });
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AppContexts;
