import { gql } from '@apollo/client';

export type UserEventCardFragment = {
  __typename?: 'UserEvent';
  userEventId: number | null;
  userId: string;
  eventName: string;
  eventDate: string;
  eventDetails: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: number;
  //category?: { __typename?: 'EventCartDetails'; name: string } | null;
};

export const UserEventCardFragmentDoc = gql`
  fragment UserEventCard on UserEvent {
    userEventid
    eventName
    eventDate
    eventDetails
    createdAt
    updatedAt
    isDeleted
  }
`;
