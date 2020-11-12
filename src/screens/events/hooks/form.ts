import { useState } from 'react';

import { TimeZone } from 'entities/time_zone';

export type Form = {
  userTimeZone: TimeZone | null;
  setUserTimeZone: (timeZone: TimeZone) => void;
};

export const useForm = (): Form => {
  const [userTimeZone, _setUserTimeZone] = useState<TimeZone | null>(null);

  const setUserTimeZone = (timeZone: TimeZone) => _setUserTimeZone(timeZone);

  return {
    userTimeZone,
    setUserTimeZone,
  };
};
