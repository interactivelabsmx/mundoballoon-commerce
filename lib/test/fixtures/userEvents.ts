import { randNumber, randText } from '@ngneat/falso';
import { UserEventCardFragment } from '@graphql/queries/users/UserEventCardFragment.graphql';

export const getFixtureUserEvent = (): UserEventCardFragment => ({
  userEventId: randNumber(),
  name: randText(),
  date: '2011-11-11 00:00:00.000000',
  details: randText(),
});

export const getFixtureUserEvents = (count = 5): UserEventCardFragment[] => {
  const userevents: UserEventCardFragment[] = [];
  for (let index = 0; index < count; index++) {
    userevents.push(getFixtureUserEvent());
  }
  return userevents;
};
