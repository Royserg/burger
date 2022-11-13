import { useEffect, useRef, useState } from 'react';
import ReactMapGl, { MapRef, ViewState } from 'react-map-gl';
import { useSearchStore } from '../store/search';

export const Map = () => {
  const { selectedLocation } = useSearchStore((state) => state);

  const [viewport, setViewport] = useState<Partial<ViewState>>({
    // Copenhagen coords by default
    latitude: 55.67594,
    longitude: 12.56553,
    zoom: 13,
  });

  useEffect(() => {
    // Move center of the map to selected location
    if (selectedLocation) {
      const { lat, lng } = selectedLocation;
      setViewport({
        latitude: lat,
        longitude: lng,
      });
    }
  }, [selectedLocation]);

  return (
    <ReactMapGl
      {...viewport}
      mapStyle='mapbox://styles/mapbox/light-v9'
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      testMode
      onMove={(e) => setViewport(e.viewState)}
      maxZoom={14}
      minZoom={4}
      reuseMaps
    ></ReactMapGl>
  );
};
