import { parseCookies } from 'nookies';
import BaseObject from '@lib/utils/BaseObject';

export const FI_TTL = 60 * 60;

export const FI_COOKIE_OPTIONS = {
  path: '/',
  maxAge: FI_TTL,
  sameSite: true,
  secure: true,
};

export const FII_TTL = 60 * 60;
export const FII_COOKIE_OPTIONS = {
  path: '/',
  maxAge: FII_TTL,
  sameSite: true,
  secure: true,
};

export const FI = 'fi';
export const FII = 'fii';

export const getCookieIdToken = () => {
  const cookies = parseCookies();
  return cookies[FI];
};
export const getCookieLanguage = () => {
  const cookies = parseCookies();
  return cookies[FII];
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

export const ckeckForExpiredCookieLanguage = (refreshLanguage: () => void) => {
  setInterval(() => {
    const cookie = getCookieLanguage();
    if (!cookie) refreshLanguage();
  }, FII_TTL * 10000);
};
