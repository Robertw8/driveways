import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '..';

import './tailwind.css';
import clsx from 'clsx';
import routes from '../../routes';

const NavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const atHome = location.pathname === routes.HOME;
  const atCatalog = location.pathname === routes.CATALOG;
  const atFavorites = location.pathname === routes.FAVORITES;

  return (
    <nav>
      <ul className="nav-list">
        <li className="h-9">
          <ButtonPrimary
            text="Home"
            type="default"
            className={clsx(
              !atHome && 'not-active-nav-button',
              atHome && 'active-nav-button'
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
              !atCatalog && 'not-active-nav-button',
              atCatalog && 'active-nav-button'
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
              !atFavorites && 'not-active-nav-button',
              atFavorites && 'active-nav-button'
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
