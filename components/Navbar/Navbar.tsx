import dynamic from 'next/dynamic';

const NavbarUserProfileLoader = dynamic(
  () => import('@components/User/NavbarUserProfile'),
  { ssr: false }
);

const Navbar = () => (
  <>
    <div>Navbar Container</div>
    <NavbarUserProfileLoader />
  </>
);

export default Navbar;
