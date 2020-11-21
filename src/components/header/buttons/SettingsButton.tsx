import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

type Props = {
  logout: () => void;
};

const SettingsButton: React.FC<Props> = ({ logout }) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorElement(event.currentTarget);

  const closeMenu = (fn: () => void) => {
    return () => {
      fn();
      setAnchorElement(null);
    };
  };

  return (
    <React.Fragment>
      <IconButton onClick={openMenu}>
        <Settings></Settings>
      </IconButton>
      <Menu
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        keepMounted
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu(logout)}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default SettingsButton;
