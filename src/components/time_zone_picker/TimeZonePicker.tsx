import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Grid, Typography } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';
import GmtOffsetText from 'components/GmtOffsetText';

import { useLogic, Suggestion } from './useLogic';

type Props = {
  setTimeZone: (timeZone: TimeZone) => void;
};

const TimeZonePicker: React.FC<Props> = ({ setTimeZone }) => {
  const [value, setValue] = useState('');
  const { suggestions, updateSuggestions, clearSuggestions } = useLogic();

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={updateSuggestions}
      onSuggestionsClearRequested={clearSuggestions}
      inputProps={{
        value,
        onChange: (_, { newValue }) => setValue(newValue),
        placeholder: 'Search Time Zone',
      }}
      renderSuggestion={renderSuggestion}
      getSuggestionValue={(suggestion) => suggestion.timezone_name}
      onSuggestionSelected={(_, { suggestion }) => {
        setTimeZone(_mapSuggetionsToTimeZone(suggestion));
      }}
    ></Autosuggest>
  );
};

const renderSuggestion = (suggestion: Suggestion) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>{suggestion.timezone_name}</Typography>
      </Grid>
      <Grid item>
        <GmtOffsetText offset={suggestion.offset}></GmtOffsetText>
      </Grid>
    </Grid>
  );
};

const _mapSuggetionsToTimeZone = (suggestion: Suggestion): TimeZone =>
  new TimeZone(suggestion.offset, { timezone_name: suggestion.timezone_name });

export default TimeZonePicker;
