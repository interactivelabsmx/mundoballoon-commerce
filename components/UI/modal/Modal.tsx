import { Dialog, Transition } from '@headlessui/react';
import { Dispatch, Fragment, ReactNode } from 'react';
import CloseModalButtonIcon from './CloseModalButtonIcon';

export interface IModal {
  open: boolean;
  setOpen: Dispatch<boolean>;
  title?: ReactNode;
  children: ReactNode;
}

const Modal = ({ children, title, open, setOpen }: IModal) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed z-10 inset-0 overflow-y-auto"
      onClose={setOpen}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <CloseModalButtonIcon setOpen={setOpen} />
            {title && (
              <Dialog.Title className="flex text-lg font-medium text-gray-900">
                {title}
              </Dialog.Title>
            )}
            <Dialog.Panel>{children}</Dialog.Panel>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);

export default Modal;
