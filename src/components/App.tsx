import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '.';

import routes from '../routes';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/CatalogPage'));

const App: React.FC = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.CATALOG} element={<CatalogPage />} />
          <Route path={routes.FAVORITES} element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
