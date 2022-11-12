import { useRef, useState } from 'react';
import ReactMapGl, { MapRef, ViewState } from 'react-map-gl';

export const Map = () => {
  const mapRef = useRef<MapRef | null>(null);

  const [viewport, setViewport] = useState<Partial<ViewState>>({
    // Copenhagen coords by default
    latitude: 55.67594,
    longitude: 12.56553,
    zoom: 13,
  });

  return (
    <div className='absolute w-full h-full bg-gray-100 z-0'>
      <ReactMapGl
        {...viewport}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        testMode
        onMove={(e) => setViewport(e.viewState)}
        maxZoom={14}
        minZoom={4}
        ref={(instance) => (mapRef.current = instance)}
      ></ReactMapGl>
    </div>
  );
};
