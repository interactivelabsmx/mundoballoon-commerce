import type { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';
import BaseTextButton from './BaseTextButton';

export const primaryClassNames =
  'text-indigo-600 hover:text-indigo-500 focus:ring-indigo-500';

const PrimaryTextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseTextButton
    {...props}
    className={classNames(primaryClassNames, props.className)}
  />
);

export default PrimaryTextButton;
