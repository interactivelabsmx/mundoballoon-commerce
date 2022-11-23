import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import classNames from '@lib/utils/classnames';

interface IDetails {
  name: string;
  items: string[];
}

export const detailsMock = [
  {
    name: 'Features',
    items: [
      'Multiple strap configurations',
      'Spacious interior with top zip',
      'Leather handle and tabs',
      'Interior dividers',
      'Stainless strap loops',
      'Double stitched construction',
      'Water-resistant',
    ],
  },
  {
    name: 'Care',
    items: [
      'Spot clean as needed',
      'Hand wash with mild soap',
      'Machine wash interior dividers',
      'Treat handle and tabs with leather conditioner',
    ],
  },
  {
    name: 'Shipping',
    items: [
      'Free shipping on orders over $300',
      'International shipping available',
      'Expedited shipping options',
      'Signature required upon delivery',
    ],
  },
  {
    name: 'Returns',
    items: [
      'Easy return requests',
      'Pre-paid shipping label included',
      '10% restocking fee for returns',
      '60 day return window',
    ],
  },
];

interface IAditionalDetails {
  details: IDetails[];
}

const AditionalDetails = ({ details }: IAditionalDetails) => (
  <section aria-labelledby="details-heading" className="mt-12">
    <h2 id="details-heading" className="sr-only">
      Additional details
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
                      'text-sm font-medium'
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

export default AditionalDetails;
