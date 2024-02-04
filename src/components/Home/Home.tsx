import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from '..';
import './tailwind.css';

const Video = lazy(() => import('./Video/Video'));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Video />
      </Suspense>
      <div className="home-container">
        <h1 className="home-title">
          Discover a new journey with{' '}
          <p className="inline text-blue-primary">Driveways</p>
        </h1>
        <p className="home-text">
          The perfect{' '}
          <Link to="/catalog" className="text-blue-primary underline">
            cars
          </Link>{' '}
          for your journey - always available. Your unforgettable adventure
          starts here
        </p>
      </div>
    </>
  );
};

export default Home;
