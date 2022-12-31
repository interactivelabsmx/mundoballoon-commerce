import { ApolloProvider } from '@apollo/client';
import useTranslation from 'next-translate/useTranslation';
import type { ReactNode } from 'react';
import { setTokenFn, useApollo } from '@lib/apollo/apolloClient';
import type BaseObject from '@lib/utils/BaseObject';
import { getGraphqlURL } from '@lib/utils/sharedConsts';
import { useAuth } from './AuthProvider';

interface IAppContexts {
  children: ReactNode;
  pageProps: BaseObject;
}

const AppContexts = ({ children, pageProps }: IAppContexts) => {
  const { lang } = useTranslation();
  const { user } = useAuth();
  const langs = lang === 'es' ? 'es-MX' : 'en-US';

  const apolloClient = useApollo(pageProps, {
    graphQLUrl: getGraphqlURL(),
    locale: langs,
  });
  if (user) setTokenFn(user);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AppContexts;
