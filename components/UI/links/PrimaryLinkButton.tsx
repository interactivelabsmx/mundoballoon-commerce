import type { AnchorHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';
import BaseLinkButton from './BaseLinkButton';

const primaryClassNames =
  'bg-indigo-600 hover:bg-indigo text-white focus:ring-indigo-500';

const PrimaryLinkButton = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <BaseLinkButton
    {...props}
    className={classNames(primaryClassNames, props.className)}
  />
);

export default PrimaryLinkButton;
