import type { AnchorHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';
import BaseLink from './BaseLink';

const primaryClassNames =
  'text-indigo-600 hover:text-indigo-500 focus:ring-indigo-500';

const PrimaryLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <BaseLink
    {...props}
    className={classNames(primaryClassNames, props.className)}
  />
);

export default PrimaryLink;
