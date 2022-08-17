import useTranslation from 'next-translate/useTranslation';
import LogoSmall from '@components/UI/logo/LogoSmall';
import { NavItemFragment } from '@graphql/queries/site/NavItemFragment';
import { NavCategoryFragment } from '@graphql/queries/site/NavItemFragment';
import FooterLink from './FooterLink';

interface IFooter {
  navOptions: NavItemFragment[];
}

const Footer = ({ navOptions }: IFooter) => {
  const { t } = useTranslation('common');
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-50">
      <h2 id="footer-heading" className="sr-only">
        {t('footer')}
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
            <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
              <LogoSmall />
            </div>
            <div className="mt-10 col-span-10 grid grid-cols-4 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
              {navOptions.map((option) => (
                <div key={`footer-nav-${option.name}`}>
                  <h3 className="text-sm font-medium text-gray-900">
                    {option.name}
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <FooterLink option={option} />
                    {option.options?.map((item: NavCategoryFragment) => (
                      <FooterLink option={item} key={item.name} />
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
};

export default Footer;
