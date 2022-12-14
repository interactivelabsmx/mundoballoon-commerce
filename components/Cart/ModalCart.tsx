import useTranslation from 'next-translate/useTranslation';
import { Dispatch } from 'react';
import Modal from '@components/UI/modal/Modal';
import CartItems from './CartItems';

interface IModalCart {
  cartOpen: boolean;
  setCartOpen: Dispatch<boolean>;
}

const ModalCart = ({ cartOpen, setCartOpen }: IModalCart) => {
  const { t } = useTranslation('common');
  return (
    <Modal open={cartOpen} setOpen={setCartOpen}>
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:px-0">
        <h1 className="text-center text-lg font-bold mb-8">
          {t('Shopping_Cart')}
        </h1>
        <CartItems />
      </div>
    </Modal>
  );
};

export default ModalCart;
