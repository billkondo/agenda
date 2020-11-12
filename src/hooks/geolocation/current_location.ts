import { useState } from 'react';

import { Location } from 'entities/location';

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  const loadCurrentLocation = () =>
    new Promise<Location>((resolve, reject) => {
      const GeoLocation = navigator.geolocation;

      if (!GeoLocation)
        reject(new Error(CurrentLocationErrors.UNAVAILABLE_SERVICE));

      GeoLocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = new Location(latitude, longitude);

          setLocation(newLocation);
          resolve(newLocation);
        },
        (error) => reject(error)
      );
    });

  return {
    location,
    loadCurrentLocation,
  };
};

export const CurrentLocationErrors = {
  UNAVAILABLE_SERVICE: 'unavailable_service',
  USER_DENIED: 'user_denied',
  FAILED: 'failed',
};
