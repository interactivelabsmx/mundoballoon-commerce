import { gql } from '@apollo/client';
import * as Types from '../../graphql';

export type UserEventCardFragment = {
  __typename?: 'UserEvent';
  userEventId: number;
  name: string;
  date: any;
  details: string;
};

export const UserEventCardFragmentDoc = gql`
  fragment UserEventCard on UserEvent {
    userEventId
    name
    date
    details
  }
`;
