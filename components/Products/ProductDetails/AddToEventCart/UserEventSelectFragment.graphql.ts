import { gql } from '@apollo/client';
import * as Types from '../../../../graphql/graphql';

export type UserEventSelectFragment = {
  __typename?: 'UserEvent';
  userEventId: number;
  name: string;
  details: string;
};

export const UserEventSelectFragmentDoc = gql`
  fragment UserEventSelect on UserEvent {
    userEventId
    name
    details
  }
`;
