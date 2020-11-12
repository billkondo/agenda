import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Routes } from 'config/routes';

import Home from 'screens/Home';
import CreateEvents from 'screens/events/CreateEvents';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home></Home>
        </Route>

        <Route exact path={Routes.CREATE_EVENTS}>
          <CreateEvents></CreateEvents>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
