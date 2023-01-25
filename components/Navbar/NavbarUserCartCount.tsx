import useTranslation from 'next-translate/useTranslation';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCommerce } from '@providers/CommerceProvider';

const NavbarUserCartCount = () => {
  const { t } = useTranslation('common');
  const { cart } = useCommerce();
  const { data, error, loading } = cart.useCartCount();
  if (error) return <SimpleTextError text={error.message} />;
  if (loading || !data) return <LoadingText />;
  const { userCartCount } = data || {};

  return (
    <>
      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {userCartCount}
      </span>
      <span className="sr-only">{t('sr_cart_count')}</span>
    </>
  );
};

export default NavbarUserCartCount;
