import { Link } from 'react-router-dom';
import { Icon, NavBar } from '..';

import routes from '../../routes';
import './tailwind.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-primary">
      <div className="footer-container">
        <p className="text-white text-xs">© Driveways. All rights reserved</p>
        <Link to={routes.HOME} className="footer-logo">
          <Icon name="car" size={30} />
          Driveways
        </Link>
        <NavBar />
      </div>
    </footer>
  );
};

export default Footer;
