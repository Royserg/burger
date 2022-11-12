import { ChangeEvent, useRef } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { useSearchStore } from '../store/search';

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { searchTerm, setSearchTerm } = useSearchStore((state) => state);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  };

  return (
    <div className='w-full mx-auto flex justify-center items-center'>
      <input
        className='input input-bordered w-full max-w-lg input-lg pr-20'
        type='text'
        placeholder='Type city, country or restaurant name'
        ref={inputRef}
        onChange={handleSearchChange}
      />

      <button className='btn btn-square btn-ghost btn-lg -ml-16'>
        <BiCurrentLocation className='text-3xl' />
      </button>
    </div>
  );
};
