import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import type { Dispatch } from 'react';
import PrimaryLinkButton from '@components/UI/links/PrimaryLinkButton';
import Modal from '@components/UI/modal/Modal';
import { useAuth } from '@providers/AuthProvider';
import { useCommerce } from '@providers/CommerceProvider';
import CartItems from './CartItems';

interface IModalCart {
  cartOpen: boolean;
  setCartOpen: Dispatch<boolean>;
}

const ModalCart = ({ cartOpen, setCartOpen }: IModalCart) => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const {
    cart: { products, subtotal, getUserCart },
  } = useCommerce();
  useEffect(() => {
    if (!products || !subtotal) getUserCart();
  }, [products, subtotal, getUserCart]);
  return (
    <Modal open={cartOpen} setOpen={setCartOpen}>
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:px-0">
        <h1 className="text-center text-lg font-bold mb-8">
          {t('Shopping_Cart')}
        </h1>
        {user && <CartItems />}
        <div className="mt-10">
          <PrimaryLinkButton href="/checkout" className="w-full">
            {t('Checkout')}
          </PrimaryLinkButton>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCart;
