import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetUserEventByIdQueryVariables = Types.Exact<{
  userEventId: Types.Scalars['Int'];
}>;

export type GetUserEventByIdQuery = {
  __typename?: 'Query';
  UserEventById?: {
    __typename?: 'UserEvent';
    userEventId?: number | null;
    userId: number;
    name: string;
    date: string;
    details: string;
  } | null;
};

export const GetUserEventByIdDocument = gql`
  query GetUserEventById($userEventId: Int!) {
    userEventById(userEventid: $userEventId) {
      userEventId
      userId
      name
      date
      details
    }
  }
`;

export function useGetUserEventByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserEventByIdQuery,
    GetUserEventByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserEventByIdQuery, GetUserEventByIdQueryVariables>(
    GetUserEventByIdDocument,
    options
  );
}
export function useGetUserEventByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserEventByIdQuery,
    GetUserEventByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserEventByIdQuery,
    GetUserEventByIdQueryVariables
  >(GetUserEventByIdDocument, options);
}
export type GetUserEventByIdQueryHookResult = ReturnType<
  typeof useGetUserEventByIdQuery
>;
export type GetUserEventByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserEventByIdLazyQuery
>;
export type GetUserEventByIdQueryResult = Apollo.QueryResult<
  GetUserEventByIdQuery,
  GetUserEventByIdQueryVariables
>;
