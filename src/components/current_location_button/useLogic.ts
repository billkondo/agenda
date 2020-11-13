import { useCurrentLocation } from 'hooks/geolocation/current_location';
import { useTimeZone } from 'hooks/geolocation/time_zone';

import { TimeZone } from 'entities/time_zone';

type Params = {
  setTimeZone: (timeZone: TimeZone) => void;
};

export const useLogic = ({ setTimeZone }: Params) => {
  const { loadCurrentLocation } = useCurrentLocation();
  const { locationToTimeZone } = useTimeZone();

  const onCurrentLocationClicked = async () => {
    const location = await loadCurrentLocation();
    const timeZone = await locationToTimeZone(location);
    setTimeZone(timeZone);
  };

  return {
    onCurrentLocationClicked,
  };
};
