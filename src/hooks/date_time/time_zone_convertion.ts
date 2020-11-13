import { utc } from 'moment';
import { tz } from 'moment-timezone';

import { TimeZone } from 'entities/time_zone';

export const useTimeZoneConversion = () => {
  const convertTimeZone = (date: Date, timeZone: TimeZone) => {
    // TODO implement this part
    const utcDate = utc(date);
  };

  return {
    convertTimeZone,
  };
};
