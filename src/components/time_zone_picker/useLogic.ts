import { useState } from 'react';
import timezones from 'config/timezones.json';

import { remove } from 'remove-accents';

export type Suggestion = {
  offset: number;
  timezone_name: string;
};

export const useLogic = () => {
  const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);

  const updateSuggestions = ({ value }: { value: string }) => {
    setSuggestions(_filter(remove(value).toLowerCase()));
  };

  const clearSuggestions = () => setSuggestions([]);

  return {
    suggestions,
    updateSuggestions,
    clearSuggestions,
  };
};

const _filter = (value: string): Array<Suggestion> =>
  timezones
    .filter(
      (timezone) => timezone.timezone_name.toLowerCase().indexOf(value) !== -1
    )
    .slice(0, 5);
