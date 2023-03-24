import useTranslation from 'next-translate/useTranslation';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCommerce } from '@providers/CommerceProvider';

const NavbarUserCartCount = () => {
  const { t } = useTranslation('common');
  const {
    cart: { count, getUserCartCount },
  } = useCommerce();
  if (!count && count !== 0) {
    getUserCartCount();
    return <LoadingText />;
  }
  return (
    <>
      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {count}
      </span>
      <span className="sr-only">{t('sr_cart_count')}</span>
    </>
  );
};

export default NavbarUserCartCount;
