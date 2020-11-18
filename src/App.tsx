import React from 'react';
import Router from 'Router';
import { Provider } from 'react-redux';

import { store } from 'store';
import { useFirebase } from 'hooks/firebase/init';

const App = () => {
  useFirebase();

  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
};

export default App;
