import { useState } from 'react';
import type { NavItemFragment } from '@layouts/NavItemFragment.graphql';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarTop from './NavbarTop';

interface INavbar {
  navOptions: NavItemFragment[];
}

const Navbar = ({ navOptions }: INavbar) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavbarMobileMenu open={open} setOpen={setOpen} navOptions={navOptions} />
      <NavbarTop setOpen={setOpen} navOptions={navOptions} />
    </>
  );
};

export default Navbar;
