import { gql } from '@apollo/client';
import * as Types from '../../graphql';

export type UserEventCardFragment = {
  __typename?: 'UserEvent';
  userId: string;
  userEventId: number;
  name: string;
  date?: any | null;
  details: string;
};

export const UserEventCardFragmentDoc = gql`
  fragment UserEventCard on UserEvent {
    userId
    userEventId
    name
    date
    details
  }
`;
