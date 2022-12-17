import type { ReactElement } from 'react';

interface IIconButton {
  children: ReactElement;
  label: string;
}

const IconButton = ({ children, label }: IIconButton) => (
  <button
    type="button"
    className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
  >
    {children}
    <span className="sr-only">{label}</span>
  </button>
);

export default IconButton;
