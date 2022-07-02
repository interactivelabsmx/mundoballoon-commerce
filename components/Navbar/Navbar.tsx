import { useState } from 'react';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarTop from './NavbarTop';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavbarMobileMenu open={open} setOpen={setOpen} />
      <NavbarTop setOpen={setOpen} />
    </>
  );
};

export default Navbar;
