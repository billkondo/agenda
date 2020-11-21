import React from 'react';
import { AppBar, Toolbar, Collapse } from '@material-ui/core';

import { useLogic } from './useLogic';
import SettingsButton from './buttons/SettingsButton';

const Header = () => {
  const { isAuthenticated, logout } = useLogic();

  return (
    <AppBar position="static">
      <Collapse in={isAuthenticated}>
        <Toolbar>
          <SettingsButton logout={logout}></SettingsButton>
        </Toolbar>
      </Collapse>
    </AppBar>
  );
};

export default Header;
