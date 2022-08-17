import { Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { getTransitionSmallDropdownProps } from './transitionPropsConstants';

interface ITransitionSmallDropdown {
  children: ReactNode;
  duration?: number;
}

const TransitionSmallDropdown = ({
  children,
  duration = 150,
}: ITransitionSmallDropdown) => (
  <Transition as={Fragment} {...getTransitionSmallDropdownProps(duration)}>
    {children}
  </Transition>
);

export default TransitionSmallDropdown;
