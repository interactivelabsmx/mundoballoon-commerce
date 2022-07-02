import React, { ReactNode } from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="h-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
