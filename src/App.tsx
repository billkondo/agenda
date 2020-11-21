import React, { useEffect } from 'react';
import Router from 'Router';
import { Provider } from 'react-redux';
import { Settings } from 'luxon';

import { store } from 'store';
import { useFirebase } from 'hooks/firebase/init';

import Header from 'components/header';

const App = () => {
  useFirebase();

  useEffect(() => {
    Settings.defaultZoneName = 'utc';
  }, []);

  return (
    <Provider store={store}>
      <Header></Header>
      <Router></Router>
    </Provider>
  );
};

export default App;
