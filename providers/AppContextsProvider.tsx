import { ApolloProvider } from '@apollo/client';
import useTranslation from 'next-translate/useTranslation';
import type { ReactNode } from 'react';
import { setTokenFn, useApollo } from '@lib/apollo/apolloClient';
import type BaseObject from '@lib/utils/BaseObject';
import { getGraphqlURL } from '@lib/utils/sharedConsts';
import { useAuth } from './AuthProvider';
import { CommerceProvider } from './CommerceProvider';

interface IAppContextsProvider {
  children: ReactNode;
  pageProps: BaseObject;
}

const AppContextsProvider = ({ children, pageProps }: IAppContextsProvider) => {
  const { lang } = useTranslation();
  const { user } = useAuth();
  const langs = lang === 'es' ? 'es-MX' : 'en-US';

  const apolloClient = useApollo(pageProps, {
    graphQLUrl: getGraphqlURL(),
    locale: langs,
  });

  if (user) setTokenFn(user);

  return (
    <ApolloProvider client={apolloClient}>
      <CommerceProvider client={apolloClient}>{children}</CommerceProvider>
    </ApolloProvider>
  );
};

export default AppContextsProvider;
