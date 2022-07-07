import { parseCookies } from 'nookies';
import BaseObject from '@lib/utils/BaseObject';

export const FI_TTL = 60 * 60;

export const FI_COOKIE_OPTIONS = {
  path: '/',
  maxAge: FI_TTL,
  sameSite: true,
  secure: true,
};

export const FI = 'fi';

export const getCookieIdToken = () => {
  const cookies = parseCookies();
  return cookies[FI];
};

export function cleanObject(object: BaseObject | null) {
  if (!object) return null;
  const newObject = Object.keys(object).reduce((acc, key) => {
    const _acc: BaseObject = acc;
    if (object[key] === undefined) return _acc;
    if (typeof object[key] === 'object') {
      _acc[key] = cleanObject(object[key]);
    } else {
      _acc[key] = object[key];
    }
    return _acc;
  }, {});
  return newObject;
}

export const checkForExpiredCookieToken = (refreshIdToken: () => void) => {
  setInterval(() => {
    const cookie = getCookieIdToken();
    if (!cookie) refreshIdToken();
  }, FI_TTL * 1000);
};
