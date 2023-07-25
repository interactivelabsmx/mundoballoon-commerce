import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import type BaseObject from '@lib/utils/BaseObject';
import classNames from '@lib/utils/classnames';
import PrimaryButton from '../buttons/PrimaryButton';

interface IPrimarySelectMenu<T> {
  label: string;
  options: T[];
  title: keyof T;
  description: keyof T;
  onChange?: (value: T) => void;
  onSelectedClick?: (value: T) => void;
}

export default function PrimarySelectMenu<T extends BaseObject>({
  label,
  options,
  title,
  description,
  onChange,
  onSelectedClick,
}: IPrimarySelectMenu<T>) {
  const [selected, setSelected] = useState<T>(options[0]);

  const handleChange = (value: T) => {
    if (onChange) onChange(value);
    setSelected(value);
  };

  const handleSelectedClick = () =>
    onSelectedClick && onSelectedClick(selected);

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">{label}</Listbox.Label>
          <div className="relative">
            <div className="flex divide-x divide-indigo-700 rounded-md shadow-sm w-full">
              <div className="flex divide-x divide-indigo-700 rounded-md shadow-sm w-full">
                <PrimaryButton
                  className="w-full rounded-r-none"
                  onClick={handleSelectedClick}
                >
                  {selected[title]}
                </PrimaryButton>
                <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="sr-only">{label}</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-left divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option[title]}
                    value={option}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none p-4 text-sm',
                      )
                    }
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? 'font-semibold' : 'font-normal'
                            }
                          >
                            {option[title]}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? 'text-white' : 'text-indigo-600'
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? 'text-indigo-200' : 'text-gray-500',
                            'mt-2',
                          )}
                        >
                          {option[description]}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
