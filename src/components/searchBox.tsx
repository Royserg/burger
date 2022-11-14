import { ChangeEvent } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { Libraries, useGoogleMapsScript } from 'use-google-maps-script';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { useSearchStore } from '../store/search';

const libraries: Libraries = ['places'];

export const SearchBox = () => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return <div>Loading GoogleMapsScript error.</div>;

  return <SearchInput />;
};

const SearchInput = () => {
  const { setSelectedLocation } = useSearchStore((state) => state);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 400 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect = async (data: { address: string; placeId: string }) => {
    setValue(data.address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address: data.address });
      const { lat, lng } = getLatLng(results[0]);
      // Save selected location in the store
      setSelectedLocation({ ...data, lat, lng });
    } catch (error) {
      console.error(`Error getting Lng & Lat data: ${error}`);
    }
  };

  return (
    <div className='relative w-full max-w-xl flex mx-auto justify-center'>
      <input
        className='input input-bordered w-full input-lg pr-20'
        type='text'
        placeholder='Type in your location...'
        value={value}
        disabled={!ready}
        onChange={handleChange}
        autoComplete='off'
      />

      {/* Render location suggestions */}
      {status === 'OK' && (
        <div className='dropdown dropdown-open absolute w-full bottom-0 left-0'>
          <ul
            tabIndex={0}
            className='dropdown-content menu w-full p-2 shadow bg-base-100 rounded-box'
          >
            {data.map(({ description, place_id }) => {
              return (
                <li
                  key={place_id}
                  className='hover:bg-gray-200'
                  onClick={() =>
                    handleSelect({ address: description, placeId: place_id })
                  }
                >
                  <a className='text-left'>{description}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
