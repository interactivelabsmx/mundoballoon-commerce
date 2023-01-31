import type { ReactNode } from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import LoadingText from '@components/UI/loading/LoadingText';
import { useGetNavOptionsQuery } from './GetNavOptions.graphql';

interface ILayout {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: ILayout) => {
  const { data, loading, error } = useGetNavOptionsQuery();
  if (error) return <SimpleTextError text={error.message} />;
  if (loading) return <LoadingText />;
  const navOptions = data?.navOptions || [];

  return (
    <div className="h-full">
      <Navbar navOptions={navOptions} />
      <main>{children}</main>
      <Footer navOptions={navOptions} />
    </div>
  );
};

export default Layout;
