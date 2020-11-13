import { useState } from 'react';

import { TimeZone } from 'entities/time_zone';

export type Form = {
  userTimeZone: TimeZone | null;
  setUserTimeZone: (timeZone: TimeZone) => void;

  eventTimeZone: TimeZone | null;
  setEventTimeZone: (timeZone: TimeZone) => void;
};

export const useForm = (): Form => {
  const [userTimeZone, setUserTimeZone] = useState<TimeZone | null>(null);
  const [eventTimeZone, setEventTimeZone] = useState<TimeZone | null>(null);

  return {
    userTimeZone,
    setUserTimeZone,
    eventTimeZone,
    setEventTimeZone,
  };
};
