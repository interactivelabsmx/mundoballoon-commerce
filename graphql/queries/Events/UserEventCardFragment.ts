import { gql } from '@apollo/client';

export type UserEventsCardFragment = {
  __typename?: 'UserEvent';
  UserEventId?: number | null;
  userId: string;
  name: string;
  date: string;
  details: string;
};

export const UserEventSimpleCardFragment = gql`
  query GetUserEventById($UserEventId: Int!) {
    userEventById(userEventid: $UserEventId) {
      userEventId
      userId
      name
      date
      details
    }
  }
`;
