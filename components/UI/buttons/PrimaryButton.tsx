import { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';
import BaseButton from './BaseButton';

const primaryClassNames =
  'bg-indigo-600 hover:bg-indigo text-white focus:ring-indigo-500 hover:bg-indigo-700';

const PrimaryButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseButton
    {...props}
    className={classNames(primaryClassNames, props.className)}
  />
);

export default PrimaryButton;
