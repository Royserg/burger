import { clsx } from 'clsx';
import { GiHamburger } from 'react-icons/gi';
import { SearchBox } from '../components/searchBox';
import { useSearchStore } from '../store/search';

export const MainSearchContainer = () => {
  const { selectedLocation } = useSearchStore((state) => state);
  const isLocationSelected = !!selectedLocation;

  return (
    <main
      className={clsx(
        'flex flex-1 flex-col',
        isLocationSelected ? 'justify-start' : 'justify-center'
      )}
    >
      {/* Search container */}
      <div
        className={clsx(
          'z-10 flex flex-col justify-center items-center  w-full text-center bg-gradient-radial from-gray-50 via-gray-100',
          !isLocationSelected && 'rounded-full h-96'
        )}
      >
        {/* Title box with Logo displayed when location is not set */}
        {!isLocationSelected && (
          <>
            {/* Title line */}
            <GiHamburger className='text-7xl' />
            <h1 className='text-5xl md:text-[4rem] leading-normal font-extrabold text-gray-700 text-center mb-4'>
              Find your next burger
            </h1>
          </>
        )}

        {/* Search input */}
        <div className='w-full flex justify-center'>
          <SearchBox />
        </div>
      </div>
    </main>
  );
};
