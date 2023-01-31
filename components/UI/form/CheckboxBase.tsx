import type { InputHTMLAttributes, LegacyRef } from 'react';
import { forwardRef } from 'react';
import ErrorText from './ErrorText';
import LabelBase from './LabelBase';

type ICheckboxBase = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
};

const CheckboxBase = (
  { label, error, ...input }: ICheckboxBase,
  ref: LegacyRef<HTMLInputElement> | undefined
) => (
  <div className="relative flex items-start">
    <div className="flex h-5 items-center">
      <input
        {...input}
        ref={ref}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
    </div>
    <div className="ml-3 text-sm">
      <LabelBase label={label} htmlFor={input.name || ''} />
    </div>
    {error && <ErrorText text={error} fieldName={input.name || ''} />}
  </div>
);

export default forwardRef<HTMLInputElement, ICheckboxBase>(CheckboxBase);
