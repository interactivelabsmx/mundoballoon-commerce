import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import classNames from '@lib/utils/classnames';

interface IDetails {
  name: string;
  items: string[];
}

interface IAditionalDetails {
  details: IDetails[];
}

const AditionalDetails = ({ details }: IAditionalDetails) => {
  const { t } = useTranslation('common');
  return (
    <section aria-labelledby="details-heading" className="mt-12">
      <h2 id="details-heading" className="sr-only">
        {t('additional_details')}
      </h2>

      <div className="divide-y divide-gray-200 border-t">
        {details.map((detail) => (
          <Disclosure as="div" key={detail.name}>
            {({ open }) => (
              <>
                <h3>
                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span
                      className={classNames(
                        open ? 'text-indigo-600' : 'text-gray-900',
                        'text-sm font-medium',
                      )}
                    >
                      {detail.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon
                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                  <ul role="list">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default AditionalDetails;
