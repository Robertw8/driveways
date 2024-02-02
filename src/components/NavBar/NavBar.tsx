import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '..';

import './tailwind.css';
import routes from '../../routes';
import clsx from 'clsx';

const NavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const atHome = location.pathname === routes.HOME;
  const atCatalog = location.pathname === routes.CATALOG;
  const atFavorites = location.pathname === routes.FAVORITES;

  return (
    <nav>
      <ul className="flex gap-10 items-center justify-center">
        <li className="h-9">
          <ButtonPrimary
            text="Home"
            type="default"
            className={clsx(
              !atHome &&
                'hover:bg-transparent focus:bg-transparent bg-transparent text-white',
              atHome &&
                'text-blue-primary bg-white hover:bg-white hover:text-blue-primary focus:bg-white focus:text-blue-primary'
            )}
            onClick={() => navigate(routes.HOME)}
          >
            Home
          </ButtonPrimary>
        </li>
        <li className="h-9">
          <ButtonPrimary
            text="Catalog"
            type="default"
            className={clsx(
              !atCatalog &&
                'hover:bg-transparent focus:bg-transparent bg-transparent text-white',
              atCatalog &&
                'text-blue-primary bg-white hover:bg-white hover:text-blue-primary focus:bg-white focus:text-blue-primary'
            )}
            onClick={() => navigate(routes.CATALOG)}
          >
            Catalog
          </ButtonPrimary>
        </li>
        <li className="h-9">
          <ButtonPrimary
            text="Favorites"
            type="default"
            className={clsx(
              !atFavorites &&
                'hover:bg-transparent focus:bg-transparent bg-transparent text-white',
              atFavorites &&
                'text-blue-primary bg-white hover:bg-white hover:text-blue-primary focus:bg-white focus:text-blue-primary'
            )}
            onClick={() => navigate(routes.FAVORITES)}
          >
            Favorites
          </ButtonPrimary>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
