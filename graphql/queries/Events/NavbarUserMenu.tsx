import { gql } from '@apollo/client';

export type EventCartDetailsFragment = {
  __typename?: 'EventCartDetails';
  name: string;
};
export type UserEventCardFragment = {
  __typename?: 'UserEvent';
  userEventid: number;
  event_Name: string;
  event_Date: string;
  event_Details: string;
  created_At: string;
  updated_At: string;
  isDeleted: string;
  category?: { __typename?: 'EventCartDetails'; name: string } | null;
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
    eventDetails {
      ...EventCartDetails
    }
  }
`;
