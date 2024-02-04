import { Outlet } from 'react-router-dom';
import { Header, Footer } from '.';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
