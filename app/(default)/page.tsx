import 'react-loading-skeleton/dist/skeleton.css';

import Hero from '@app/component/hero';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Home = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Hero /> || <Skeleton count={1} />
    </SkeletonTheme>
  );
};

export default Home;
