import useTranslation from 'next-translate/useTranslation';

export enum DateDisplayTypes {
  SHORT,
  LONG,
}

export const DateDisplayFormats = {
  [DateDisplayTypes.SHORT]: {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  } as Intl.DateTimeFormatOptions,
  [DateDisplayTypes.LONG]: {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as Intl.DateTimeFormatOptions,
};

export interface IDateDisplayBase {
  date: Date | string;
  type?: DateDisplayTypes;
}

const DateDisplayBase = ({
  date,
  type = DateDisplayTypes.SHORT,
}: IDateDisplayBase) => {
  const { lang } = useTranslation();
  const cDate = new Date(date);
  const options = DateDisplayFormats[type];

  return <span>{cDate.toLocaleDateString(lang, options)}</span>;
};

export default DateDisplayBase;
