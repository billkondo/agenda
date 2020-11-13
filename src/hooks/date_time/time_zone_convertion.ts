import { utc, Moment } from 'moment';
import { tz } from 'moment-timezone';

import { TimeZone } from 'entities/time_zone';

export const useTimeZoneConversion = () => {
  const convertTimeZone = (date: Moment, timeZone: TimeZone): Moment => {
    if (timeZone.timezone_name === null)
      throw new Error('timezone_name is null');

    const utcDate = utc(date);
    const timeZoneDate = tz(utcDate, timeZone.timezone_name);

    return timeZoneDate;
  };

  return {
    convertTimeZone,
  };
};
