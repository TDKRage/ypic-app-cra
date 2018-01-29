import React from 'react';
import PropTypes from 'prop-types';

import SignOutIcon from 'react-icons/lib/fa/sign-out';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import List from 'react-toolbox/lib/list/List';
import ListDivider from 'react-toolbox/lib/list/ListDivider';
import ListItem from 'react-toolbox/lib/list/ListItem';


const AppDrawer = ({ active, toggleDrawer, onSignOut }) => (
  <Drawer active={active} onOverlayClick={toggleDrawer}>
    <List selectable ripple>
      <ListItem value="downloads" leftIcon="get_app" caption="Downloads" />
      <ListDivider />
      <ListItem value="signout" leftIcon={<SignOutIcon />} onClick={onSignOut} caption="Sign Out" />
    </List>
  </Drawer>
);

AppDrawer.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default AppDrawer;
