import Link from 'next/link';
import LogoSmall from '@components/UI/logo/LogoSmall';
import { NavItemFragment } from '@graphql/queries/site/NavItemFragment';

const footerNavigation = {
  Products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  Company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  'Customer Service': [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
};

const Footer = () => (
  <footer aria-labelledby="footer-heading" className="bg-gray-50">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-200 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
          <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
            <LogoSmall />
          </div>
          <div className="mt-10 col-span-10 grid grid-cols-4 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
            {Object.keys(footerNavigation).map((key) => (
              <div key={`footer-nav-${key}`}>
                <h3 className="text-sm font-medium text-gray-900">{key}</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {/* @ts-expect-error TODO: not typed yet */}
                  {footerNavigation[key].map((item: NavItemFragment) => (
                    <li key={item.name} className="text-sm">
                      <Link href={item.href || '/'}>
                        <a className="text-gray-500 hover:text-gray-600">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-10 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2022 ChamBear All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
