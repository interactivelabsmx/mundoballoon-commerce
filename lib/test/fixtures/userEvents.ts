import { randNumber, randText } from '@ngneat/falso';
import { UserEventsCardFragment } from '@graphql/queries/Events/UserEventCardFragment';

export const getFixtureUserEvent = (): UserEventsCardFragment => ({
  UserEventId: randNumber(),
  userId: '6LGqXFEX3MNbp1BxI5mVAuweA2T2',
  name: randText(),
  date: '2011-11-11 00:00:00.000000',
  details: randText(),
});

export const getFixtureUserEvents = (count = 5): UserEventsCardFragment[] => {
  const userevents: UserEventsCardFragment[] = [];
  for (let index = 0; index < count; index++) {
    userevents.push(getFixtureUserEvent());
  }
  return userevents;
};
