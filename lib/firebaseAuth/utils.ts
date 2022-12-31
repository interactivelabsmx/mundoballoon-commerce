import type BaseObject from '@lib/utils/BaseObject';

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
