import { MockPlaceMenu } from '../mocks';
import { FaHamburger } from 'react-icons/fa';

interface PlaceMenuProps {
  menu: MockPlaceMenu[];
}

export const PlaceMenu = ({ menu }: PlaceMenuProps) => {
  return (
    <div className='w-full rounded-xl bg-gray-50 shadow-md p-4'>
      {menu.map((item) => {
        return (
          <div key={item.id} className='card card-side bg-base-100'>
            <figure>
              <FaHamburger className='text-9xl' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
