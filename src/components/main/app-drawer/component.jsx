import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import SignOutIcon from 'react-icons/lib/fa/sign-out';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import List from 'react-toolbox/lib/list/List';
import ListDivider from 'react-toolbox/lib/list/ListDivider';
import ListItem from 'react-toolbox/lib/list/ListItem';

import { DOWNLOADS } from '../../../urls';


const AppDrawer = ({ active, toggleDrawer, onSignOut }) => (
  <Drawer active={active} onOverlayClick={toggleDrawer}>
    <List selectable ripple>
      <NavLink to={DOWNLOADS} activeStyle={{ fontWeight: 'bold' }}><ListItem value="downloads" leftIcon="get_app" caption="Downloads" /></NavLink>
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
