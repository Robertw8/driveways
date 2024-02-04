import { Link } from 'react-router-dom';
import { Icon, NavBar } from '..';

import routes from '../../routes';
import './tailwind.css';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-primary">
      <div className="header-container">
        <Link to={routes.HOME} className="header-logo">
          <Icon name="car" size={30} />
          Driveways
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
