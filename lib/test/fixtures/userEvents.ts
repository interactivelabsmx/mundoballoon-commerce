import { randNumber, randText } from '@ngneat/falso';
import { UserEventCardFragment } from '@graphql/queries/Events/NavbarUserMenu';

export const getFixtureUserEvent = (): UserEventCardFragment => ({
  userEventId: randNumber(),
  userId: '6LGqXFEX3MNbp1BxI5mVAuweA2T2',
  eventName: randText(),
  eventDate: '2011-11-11 00:00:00.000000',
  eventDetails: randText(),
  createdAt: '2011-11-11 00:00:00.000000',
  updatedAt: '2011-11-11 00:00:00.000000',
  isDeleted: randNumber(),
});

export const getFixtureUserEvents = (count = 5): UserEventCardFragment[] => {
  const userevents: UserEventCardFragment[] = [];
  for (let index = 0; index < count; index++) {
    userevents.push(getFixtureUserEvent());
  }
  return userevents;
};
