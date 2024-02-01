import { Outlet } from 'react-router-dom';
import { Header } from '.';

const Layout: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-4 lg:px-6">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
