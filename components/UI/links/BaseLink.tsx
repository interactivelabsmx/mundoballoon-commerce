import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';

const baseClassNames =
  'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

const BaseLink = ({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link href={props.href || ''}>
    <a className={classNames(baseClassNames, className)} {...props}>
      {children}
    </a>
  </Link>
);

export default BaseLink;