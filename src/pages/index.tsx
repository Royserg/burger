import type { NextPage } from 'next';
import { MainSearchContainer } from '../components/mainSearchContainer';
import { Map } from '../components/map';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col pt-2 bg-gray-100'>
      {/* Map background */}
      <div className='absolute w-full h-full z-0'>
        <Map />
      </div>

      {/* Hero section - Logo + search */}
      <MainSearchContainer />
    </div>
  );
};

export default Home;
