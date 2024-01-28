'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react';

import type { MapProps } from '../types';

function GoogleMaps({ lat, lng }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = (await loader.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary;

      const position = {
        lat,
        lng,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MAP_ID',
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // eslint-disable-next-line no-new
      new Marker({
        map,
        position,
      });
    };

    initMap();
  }, [lat, lng]);

  return (
    <div className="h-full rounded-md border-2 border-white" ref={mapRef} />
  );
}

export default GoogleMaps;
