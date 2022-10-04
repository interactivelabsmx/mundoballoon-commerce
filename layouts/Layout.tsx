import React, { ReactNode } from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { useGetNavOptionsQuery } from '@graphql/queries/site/GetNavOptions.graphql';

interface ILayout {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: ILayout) => {
  const { data, loading, error } = useGetNavOptionsQuery();
  const navOptions = data?.navOptions || [];
  return (
    <div className="h-full">
      <Navbar
        navOptions={navOptions}
        loading={loading}
        error={error?.message}
      />
      <main>{children}</main>
      <Footer navOptions={navOptions} />
    </div>
  );
};

export default Layout;
