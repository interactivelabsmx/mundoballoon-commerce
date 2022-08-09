import { Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface ITransitionEase {
  children: ReactNode;
  speed?: number;
}

const TransitionEase = ({ children, speed = 100 }: ITransitionEase) => (
  <Transition
    as={Fragment}
    enter={`transition ease-out duration-${speed}`}
    enterFrom={`transform opacity-0 scale-95`}
    enterTo={`transform opacity-${speed} scale-${speed}`}
    leave={`transition ease-in duration-${speed}`}
    leaveFrom={`transform opacity-${speed} scale-${speed}`}
    leaveTo={`transform opacity-0 scale-95`}
  >
    {children}
  </Transition>
);

export default TransitionEase;
