import { useState } from 'react';

import { EventTimeType } from 'entities/event_time_type';
import { TimeZone } from 'entities/time_zone';

import { useTimeZoneConversion } from 'hooks/date_time/time_zone_convertion';

export type Form = {
  userTimeZone: TimeZone | null;
  setUserTimeZone: (timeZone: TimeZone) => void;

  eventTimeZone: TimeZone | null;
  setEventTimeZone: (timeZone: TimeZone) => void;

  eventTimeType: EventTimeType | null;
  setEventTimeType: (evenTimeType: EventTimeType) => void;

  userDateTime: Date | null;
  setUserDateTime: (dateTime: Date) => void;

  eventDateTime: Date | null;
  setEventDateTime: (dateTime: Date) => void;
};

export const useForm = (): Form => {
  const [userTimeZone, setUserTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeZone, setEventTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeType, setEventTimeType] = useState<EventTimeType | null>(
    null
  );
  const [userDateTime, _setUserDateTime] = useState<Date | null>(null);
  const [eventDateTime, setEventDateTime] = useState<Date | null>(null);

  const { convertTimeZone } = useTimeZoneConversion();

  const setUserDateTime = (date: Date) => {
    // TODO complete this part

    if (eventTimeZone === null)
      throw new Error('eventTimeZone was not supposed to be null');

    convertTimeZone(date, eventTimeZone);
  };

  return {
    userTimeZone,
    setUserTimeZone,
    eventTimeZone,
    setEventTimeZone,
    eventTimeType,
    setEventTimeType,
    userDateTime,
    setUserDateTime,
    eventDateTime,
    setEventDateTime,
  };
};
