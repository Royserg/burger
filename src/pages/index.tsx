import type { NextPage } from 'next';
import Head from 'next/head';
import { GiHamburger } from 'react-icons/gi';
import { SearchInput } from '../components/searchInput';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center pt-2 bg-gray-100'>
      <Head>
        <title>Burger</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-1 flex-col items-center justify-center px-20 text-center '>
        {/* Title line */}
        <GiHamburger className='text-7xl' />
        <h1 className='text-5xl md:text-[4rem] leading-normal font-extrabold text-gray-700 text-center mb-4'>
          Find your next burger
        </h1>

        {/* Search input */}
        <div className='w-full flex justify-center'>
          <SearchInput />
        </div>
      </main>
    </div>
  );
};

export default Home;
