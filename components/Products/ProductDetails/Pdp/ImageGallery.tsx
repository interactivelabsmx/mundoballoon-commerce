import { Tab } from '@headlessui/react';
import Image from 'next/image';
import classNames from '@lib/utils/classnames';
import type { MediaFragmentFragment } from './MediaFragment.graphql';

interface IImageGallery {
  images: MediaFragmentFragment[] | null | undefined;
}

const ImageGallery = ({ images }: IImageGallery) => (
  <>
    {images && (
      <Tab.Group as="div" className="flex flex-col-reverse">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <Tab.List className="grid grid-cols-4 gap-6">
            {images.map((image) => (
              <Tab
                key={image.productVariantMediaId}
                className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              >
                {({ selected }) => (
                  <>
                    <span className="sr-only"> {image.name} </span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        fill
                        src={image.url || ''}
                        alt={image.description}
                        className="h-full w-full object-cover object-center"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        selected ? 'ring-indigo-500' : 'ring-transparent',
                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                      )}
                    />
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
          {images.map((image) => (
            <Tab.Panel key={image.productVariantMediaId}>
              <Image
                fill
                src={image.url || ''}
                alt={image.description}
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    )}
  </>
);
export default ImageGallery;
