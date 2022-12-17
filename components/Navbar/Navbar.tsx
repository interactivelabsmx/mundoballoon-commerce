import { useState } from 'react';
import type { NavItemFragment } from '@layouts/NavItemFragment.graphql';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarTop from './NavbarTop';

interface INavbar {
  navOptions: NavItemFragment[];
  loading: boolean;
  error?: string;
}

const Navbar = ({ navOptions, loading, error }: INavbar) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavbarMobileMenu
        open={open}
        setOpen={setOpen}
        navOptions={navOptions}
        loading={loading}
        error={error}
      />
      <NavbarTop
        setOpen={setOpen}
        navOptions={navOptions}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default Navbar;
