import { Outlet } from 'react-router-dom';
import { Header, Footer, Loader } from '.';
import { Suspense } from 'react';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Suspense fallback={<Loader size="large" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
