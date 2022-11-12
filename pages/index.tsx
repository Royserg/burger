import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Burger</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h4 className='text-4xl bg-blue-600 text-white p-4'>Burger</h4>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <span>Footer</span>
      </footer>
    </div>
  );
};

export default Home;
