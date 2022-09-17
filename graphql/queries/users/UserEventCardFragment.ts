import { gql } from '@apollo/client';
import * as Types from '../../graphql';

export type UserEventCardFragment = {
  __typename?: 'UserEventCard';
  userId: string;
  userEventId: number;
  name: string;
  date: string;
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
