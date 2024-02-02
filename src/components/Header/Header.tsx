import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { Icon } from '..';

import routes from '../../routes';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-primary">
      <div className="flex items-center justify-between container mx-auto py-5 px-6 md:px-8 lg:px-12">
        <Link
          to={routes.HOME}
          className="hidden md:flex items-center gap-2 text-white"
        >
          <Icon name="car" size={30} />
          Driveways
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
