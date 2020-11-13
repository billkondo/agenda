import { useState } from 'react';

import { EventTimeType } from 'entities/event_time_type';
import { TimeZone } from 'entities/time_zone';

export type Form = {
  userTimeZone: TimeZone | null;
  setUserTimeZone: (timeZone: TimeZone) => void;

  eventTimeZone: TimeZone | null;
  setEventTimeZone: (timeZone: TimeZone) => void;

  eventTimeType: EventTimeType | null;
  setEventTimeType: (evenTimeType: EventTimeType) => void;
};

export const useForm = (): Form => {
  const [userTimeZone, setUserTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeZone, setEventTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeType, setEventTimeType] = useState<EventTimeType | null>(
    null
  );

  return {
    userTimeZone,
    setUserTimeZone,
    eventTimeZone,
    setEventTimeZone,
    eventTimeType,
    setEventTimeType,
  };
};
