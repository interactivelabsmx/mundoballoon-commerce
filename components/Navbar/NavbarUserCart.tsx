import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useAuth } from '@providers/AuthProvider';
import NavbarUserCartCount from './NavbarUserCartCount';

const ModalCartLoader = dynamic(() => import('../Cart/ModalCart'), {
  ssr: false,
});

const NavbarUserCart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const { user } = useAuth();

  return (
    <div className="ml-4 flow-root">
      <button className="group -m-2 p-2 flex items-center" onClick={openCart}>
        <ShoppingCartIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        {user && <NavbarUserCartCount />}
      </button>
      {user && (
        <ModalCartLoader cartOpen={cartOpen} setCartOpen={setCartOpen} />
      )}
    </div>
  );
};

export default NavbarUserCart;
