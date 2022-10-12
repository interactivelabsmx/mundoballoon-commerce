import { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';

const baseClassNames = 'base-button';

const BaseButton = ({
  type = 'button',
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type={type}
    className={classNames(
      baseClassNames,
      className,
      (props.disabled && 'disabled:opacity-50') || ''
    )}
    {...props}
  >
    {children}
  </button>
);

export default BaseButton;
