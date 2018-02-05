import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

import SignOutIcon from 'react-icons/lib/fa/sign-out';
import MusicIcon from 'react-icons/lib/fa/music';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import List from 'react-toolbox/lib/list/List';
import ListDivider from 'react-toolbox/lib/list/ListDivider';
import ListItem from 'react-toolbox/lib/list/ListItem';

import { PDF } from '../../../urls';


const AppDrawer = ({ active, toggleDrawer, onSignOut }) => (
  <Drawer active={active} onOverlayClick={toggleDrawer}>
    <List selectable ripple>
      <Collapsible trigger={<ListItem caption="YPC2018 Music Program" />}>
        <NavLink to={PDF('before_service1')}>
          <ListItem leftIcon={<MusicIcon />} legend="127 - Give me joy in my heart" caption="Before Service 1" />
        </NavLink>
        <NavLink to={PDF('before_service2')}><ListItem leftIcon={<MusicIcon />} legend="362 - A miracle of love" caption="Before Service 2" /></NavLink>
        <NavLink to={PDF('before_service3')}><ListItem leftIcon={<MusicIcon />} legend="21 - O God beyond all praising" caption="Before Service 3" /></NavLink>
        <NavLink to={PDF('opening_service')}><ListItem leftIcon={<MusicIcon />} legend="302 - Shine, Jesus, shine" caption="Opening" /></NavLink>
        <NavLink to={PDF('after_text')}><ListItem leftIcon={<MusicIcon />} legend="77 - Christ living in me" caption="After Text" /></NavLink>
        <NavLink to={PDF('calling_up1')}><ListItem leftIcon={<MusicIcon />} legend="122 - Brighten every corner " caption="Calling Up 1" /></NavLink>
        <NavLink to={PDF('calling_up2')}><ListItem leftIcon={<MusicIcon />} legend="149 - Seek ye first" caption="Calling Up 2" /></NavLink>
        <NavLink to={PDF('repentance')}><ListItem leftIcon={<MusicIcon />} legend="343 - Let us break bread together" caption="Hymn of Repentance" /></NavLink>
        <NavLink to={PDF('communion1')}><ListItem leftIcon={<MusicIcon />} legend="327  Jesus paid it all" caption="Communion 1" /></NavLink>
        <NavLink to={PDF('communion2')}><ListItem leftIcon={<MusicIcon />} legend="318 - I hear Thy welcome voice " caption="Communion 2" /></NavLink>
        <NavLink to={PDF('prep_departed')}><ListItem leftIcon={<MusicIcon />} legend="347 - Come, share the Lord" caption="Preparation Departed" /></NavLink>
        <NavLink to={PDF('after_service')}><ListItem leftIcon={<MusicIcon />} legend="We will keep our faith alive" caption="After Service" /></NavLink>
        <NavLink to={PDF('theme_song')}><ListItem leftIcon={<MusicIcon />} legend="In Christ we live and move" caption="Theme Song" /></NavLink>
      </Collapsible>
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
