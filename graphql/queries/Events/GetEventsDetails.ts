import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetUserEventByIdQueryVariables = Types.Exact<{
  userEventId: Types.Scalars['Int'];
}>;

export type GetUserEventByIdQuery = {
  __typename?: 'Query';
  eventByUser?: {
    __typename?: 'UserEvent';
    productId?: number | null;
    event_name: string;
    event_date: string;
    created_at: Date;
    event_details?: Array<{
      __typename?: 'UserEventVariant';
      media?: Array<{
        eventCartId: number;
        quantity: number;
      }> | null;
    }> | null;
  } | null;
};

export const GetUserEventByIdDocument = gql`
  query GetEventByUser($userEventId: Int!) {
    eventByUser(userEventId: $userEventId) {
      userEventId
      name
      date
      details
      createdAt
      updatedAt
      EventCartDetail {
        eventCartId
        productId
        userEventId
        quantity
      }
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
