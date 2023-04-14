export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const GRAPHQL_URL = 'https://localhost:5001/graphql/';

const GRAPHQL_URL_NO_TLS = 'http://localhost:5000/graphql/';

export const getGraphqlURL = () =>
  process.env.GRAPHQL_URL || process.env.USE_TLS === 'false'
    ? GRAPHQL_URL_NO_TLS
    : GRAPHQL_URL;

export const SelectOne = { label: 'Select One', value: '' };

export const PAGING_QUERY_DEFAULT = { first: 5, after: null };

export enum Locales {
  en = 'en',
  es = 'es',
}
