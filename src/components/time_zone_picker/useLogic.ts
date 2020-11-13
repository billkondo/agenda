import { useState } from 'react';

export type Suggestion = {
  offset: number;
  timezone_name: string;
};

export const useLogic = () => {
  const [suggestions, setSuggestions] = useState<Array<Suggestion>>([
    {
      offset: -1,
      timezone_name: 'aa',
    },
    {
      offset: +3,
      timezone_name: 'bb',
    },
    {
      offset: 0,
      timezone_name: 'cc',
    },
  ]);

  const updateSuggestions = ({}) => {
    console.log('UPDATE');
  };

  const clearSuggestions = () => {
    console.log('CLEAR');
  };

  return {
    suggestions,
    updateSuggestions,
    clearSuggestions,
  };
};
