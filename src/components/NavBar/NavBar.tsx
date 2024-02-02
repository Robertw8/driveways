import { Link } from 'react-router-dom';
import { Icon } from '..';

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Icon name="car" size={30} />
    </div>
  );
};

export default NavBar;
