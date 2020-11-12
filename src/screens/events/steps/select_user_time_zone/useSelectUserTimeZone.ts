import { useCurrentLocation } from 'hooks/geolocation/current_location';
import { useTimeZone } from 'hooks/geolocation/time_zone';

import { TimeZone } from 'entities/time_zone';

type Params = {
  setUserTimeZone: (timeZone: TimeZone) => void;
};

export const useSelectUserTimeZone = ({ setUserTimeZone }: Params) => {
  const { loadCurrentLocation } = useCurrentLocation();
  const { locationToTimeZone } = useTimeZone();

  const onCurrentLocationClicked = async () => {
    const location = await loadCurrentLocation();
    const timeZone = await locationToTimeZone(location);
    setUserTimeZone(timeZone);
  };

  return {
    onCurrentLocationClicked,
  };
};
