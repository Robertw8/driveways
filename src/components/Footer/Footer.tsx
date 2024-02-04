import { Link } from 'react-router-dom';
import { Icon, NavBar } from '..';

import routes from '../../routes';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-primary">
      <div className="container mx-auto py-5 px-6 md:px-8 lg:px-12 flex flex-col-reverse gap-5 md:flex-row md:gap-0 items-center justify-evenly">
        <p className="text-white text-xs">© Driveways. All rights reserved</p>
        <Link
          to={routes.HOME}
          className="hidden md:flex items-center gap-2 text-white"
        >
          <Icon name="car" size={30} />
          Driveways
        </Link>
        <NavBar />
      </div>
    </footer>
  );
};

export default Footer;
