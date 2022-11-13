import 'mapbox-gl/dist/mapbox-gl.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactMapGl, { Marker, Popup, ViewState } from 'react-map-gl';
import { getNearbyBurgerRestaurants } from '../services/places';
import { useSearchStore } from '../store/search';

interface PopupData {
  placeId: string;
  lat: number;
  lng: number;
  address: string;
  name: string;
  googleRating: number;
  imgUrl?: string;
}

export const Map = () => {
  const { selectedLocation, searchResults, setSearchResults } = useSearchStore(
    (state) => state
  );

  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState<PopupData | null>(null);
  const [viewport, setViewport] = useState<Partial<ViewState>>({
    // Copenhagen coords by default
    latitude: 55.67594,
    longitude: 12.56553,
    zoom: 13,
  });

  useEffect(() => {
    // Move center of the map to selected location
    // Search and display burger restaurants in the area
    if (selectedLocation) {
      const { lat, lng } = selectedLocation;
      setViewport({
        latitude: lat,
        longitude: lng,
        zoom: 16,
      });

      getNearbyBurgerRestaurants({ lat, lng }).then((results) => {
        setSearchResults(results);
      });
    }
  }, [selectedLocation]);

  return (
    <ReactMapGl
      {...viewport}
      mapStyle='mapbox://styles/mapbox/light-v9'
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      style={{ width: '100%', height: '100%' }}
      testMode
      onMove={(e) => setViewport(e.viewState)}
      maxZoom={20}
      minZoom={4}
      reuseMaps
    >
      {searchResults.length > 0 &&
        searchResults.map((place) => {
          const lng = place.geometry?.location?.lng();
          const lat = place.geometry?.location?.lat();

          return (
            <Marker
              longitude={lng}
              latitude={lat}
              anchor='bottom'
              key={place.place_id}
              color='orangered'
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupData({
                  lat: lat as number,
                  lng: lng as number,
                  placeId: place?.place_id as string,
                  name: place?.name as string,
                  address: place?.formatted_address as string,
                  googleRating: place?.rating as number,
                  imgUrl: place?.photos?.[0]?.getUrl(),
                });
              }}
            ></Marker>
          );
        })}

      {popupData && (
        <Popup
          longitude={popupData.lng}
          latitude={popupData.lat}
          anchor='bottom'
          onClose={() => setPopupData(null)}
        >
          <div className='p-2 flex flex-col'>
            <h3 className='text-2xl font-bold mb-2'>
              <Link href={popupData.placeId}>{popupData.name}</Link>
            </h3>
            <div className='text-lg underline'>
              Google Rating: {popupData.googleRating}
            </div>

            {popupData?.imgUrl && (
              <img className='w-48 ml-2 object-cover' src={popupData?.imgUrl} />
            )}
          </div>
        </Popup>
      )}
    </ReactMapGl>
  );
};
