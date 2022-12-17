import { ApolloProvider } from '@apollo/client';
import useTranslation from 'next-translate/useTranslation';
import type { ReactNode } from 'react';
import { useApollo } from '@lib/apollo/apolloClient';
import { getCookieIdToken } from '@lib/firebaseAuth/utils';
import type BaseObject from '@lib/utils/BaseObject';
import { getGraphqlURL } from '@lib/utils/sharedConsts';

interface IAppContexts {
  children: ReactNode;
  pageProps: BaseObject;
}

const AppContexts = ({ children, pageProps }: IAppContexts) => {
  let langs = '';
  const { lang } = useTranslation();
  if (lang == 'es') {
    langs = 'es-MX';
  }
  if (lang == 'en') {
    langs = 'en-US';
  }
  const apolloClient = useApollo(pageProps, {
    graphQLUrl: getGraphqlURL(),
    getToken: getCookieIdToken,
    locale: langs,
  });
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AppContexts;
