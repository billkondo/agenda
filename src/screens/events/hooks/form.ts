import { useState } from 'react';
import { DateTime, Settings } from 'luxon';

import { EventTimeType } from 'entities/event_time_type';
import { TimeZone } from 'entities/time_zone';

export type Form = {
  userTimeZone: TimeZone | null;
  setUserTimeZone: (timeZone: TimeZone) => void;

  eventTimeZone: TimeZone | null;
  setEventTimeZone: (timeZone: TimeZone) => void;

  eventTimeType: EventTimeType | null;
  setEventTimeType: (evenTimeType: EventTimeType) => void;

  baseTimeZone: TimeZone | null;
  setBaseTimeZone: (timeZone: TimeZone) => void;

  userDateTime: DateTime | null;
  setUserDateTime: (dateTime: DateTime) => void;

  eventDateTime: DateTime | null;
  setEventDateTime: (dateTime: DateTime) => void;

  title: string;
  setTitle: (title: string) => void;

  description: string;
  setDescription: (description: string) => void;
};

export const useForm = (): Form => {
  const [userTimeZone, setUserTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeZone, setEventTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeType, setEventTimeType] = useState<EventTimeType | null>(
    null
  );
  const [userDateTime, _setUserDateTime] = useState<DateTime | null>(null);
  const [eventDateTime, _setEventDateTime] = useState<DateTime | null>(null);
  const [baseTimeZone, _setBaseTimeZone] = useState<TimeZone | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const setDateTime = (
    updateFirst: (date: DateTime) => void,
    secondTimeZone: TimeZone | null,
    updateSecond: (date: DateTime) => void
  ) => (date: DateTime) => {
    const isoDate = date.toISO();
    updateFirst(date);
    updateSecond(
      DateTime.fromISO(isoDate, { zone: secondTimeZone!.timezone_name })
    );
  };

  const setBaseTimeZone = (timeZone: TimeZone) => {
    _setBaseTimeZone(timeZone);
    Settings.defaultZoneName = timeZone.timezone_name;
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
      _setUserDateTime,
      eventTimeZone,
      _setEventDateTime
    ),
    eventDateTime,
    setEventDateTime: setDateTime(
      _setEventDateTime,
      userTimeZone,
      _setUserDateTime
    ),
    baseTimeZone,
    setBaseTimeZone,
    title,
    setTitle,
    description,
    setDescription,
  };
};
