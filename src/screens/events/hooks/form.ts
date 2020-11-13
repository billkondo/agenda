import { useState } from 'react';
import { Moment } from 'moment';

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

  userDateTime: Moment | null;
  setUserDateTime: (dateTime: Moment) => void;

  eventDateTime: Moment | null;
  setEventDateTime: (dateTime: Moment) => void;
};

export const useForm = (): Form => {
  const [userTimeZone, setUserTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeZone, setEventTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeType, setEventTimeType] = useState<EventTimeType | null>(
    null
  );
  const [userDateTime, _setUserDateTime] = useState<Moment | null>(null);
  const [eventDateTime, _setEventDateTime] = useState<Moment | null>(null);

  const { convertTimeZone } = useTimeZoneConversion();

  const setDateTime = (
    timeZone: TimeZone | null,
    updateFirst: (date: Moment) => void,
    updateSecond: (date: Moment) => void
  ) => (date: Moment) => {
    if (timeZone === null)
      throw new Error('timeZone was not supposed to be null');

    const convertedTime = convertTimeZone(date, timeZone);
    updateFirst(date);
    updateSecond(convertedTime);
  };

  return {
    userTimeZone,
    setUserTimeZone,
    eventTimeZone,
    setEventTimeZone,
    eventTimeType,
    setEventTimeType,
    userDateTime,
    setUserDateTime: setDateTime(
      eventTimeZone,
      _setUserDateTime,
      _setEventDateTime
    ),
    eventDateTime,
    setEventDateTime: setDateTime(
      userTimeZone,
      _setEventDateTime,
      _setUserDateTime
    ),
  };
};
