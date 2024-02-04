import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from '..';

const Video = lazy(() => import('./Video/Video'));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Video />
      </Suspense>
      <div className="container mx-auto pb-24 pt-14 px-3 md:px-4 lg:px-6">
        <h1 className="mt-20 text-primary lg:text-white select-none text-center text-4xl lg:text-7xl">
          Discover a new journey with{' '}
          <p className="inline text-blue-primary">Driveways</p>
        </h1>
        <p className="mt-20 text-primary lg:text-white select-none text-center text-2xl lg:text-5xl">
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
