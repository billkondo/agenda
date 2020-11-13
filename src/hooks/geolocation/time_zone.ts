import axios from 'axios';

import { Keys } from 'config/keys';
import { Location } from 'entities/location';
import { TimeZone } from 'entities/time_zone';

export const useTimeZone = () => {
  const locationToTimeZone = async (location: Location): Promise<TimeZone> => {
    const timeZone = await _fetchTimeZone(location);
    return timeZone;
  };

  return {
    locationToTimeZone,
  };
};

const _fetchTimeZone = async (location: Location): Promise<TimeZone> => {
  const url = 'https://timezone.abstractapi.com/v1/current_time';
  const response = await axios.get(url, {
    params: {
      api_key: Keys.ABSTRACT_API,
      location: `${location.lat},${location.lng}`,
    },
  });
  const { gmt_offset, timezone_name } = response.data;

  return new TimeZone(gmt_offset, { timezone_name });
};
