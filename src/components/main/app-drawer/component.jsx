import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

import SignOutIcon from 'react-icons/lib/fa/sign-out';
import MusicIcon from 'react-icons/lib/fa/music';
import BookIcon from 'react-icons/lib/fa/book';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import List from 'react-toolbox/lib/list/List';
import ListDivider from 'react-toolbox/lib/list/ListDivider';
import ListItem from 'react-toolbox/lib/list/ListItem';

import { PDF, HOME } from '../../../urls';

import './index.css';

const AppDrawer = ({
  active,
  toggleDrawer,
  ypcMusicOpen,
  onSignOut,
  onYPCMusicClick,
}) => (
  <Drawer active={active} onOverlayClick={toggleDrawer}>
    <List selectable ripple>
      <NavLink className="clean-text" activeClassName="active-link" exact to={HOME}><ListItem leftIcon="home" caption="Home" /></NavLink>
      <NavLink className="clean-text" activeClassName="active-link" to={PDF('ypic_cg_2018')}><ListItem leftIcon={<BookIcon />} caption="YPiC Care Guide" /></NavLink>
      <Collapsible open={ypcMusicOpen} handleTriggerClick={onYPCMusicClick} trigger={<ListItem leftIcon="list" caption="YPC18218 Music" />}>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('before_service1')}><ListItem leftIcon={<MusicIcon />} legend="127 - Give me joy in my heart" caption="Before Service 1" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('before_service2')}><ListItem leftIcon={<MusicIcon />} legend="362 - A miracle of love" caption="Before Service 2" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('before_service3')}><ListItem leftIcon={<MusicIcon />} legend="21 - O God beyond all praising" caption="Before Service 3" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('opening_service')}><ListItem leftIcon={<MusicIcon />} legend="302 - Shine, Jesus, shine" caption="Opening" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('after_text')}><ListItem leftIcon={<MusicIcon />} legend="77 - Christ living in me" caption="After Text" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('calling_up1')}><ListItem leftIcon={<MusicIcon />} legend="122 - Brighten every corner " caption="Calling Up 1" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('calling_up2')}><ListItem leftIcon={<MusicIcon />} legend="149 - Seek ye first" caption="Calling Up 2" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('repentance')}><ListItem leftIcon={<MusicIcon />} legend="343 - Let us break bread together" caption="Hymn of Repentance" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('communion1')}><ListItem leftIcon={<MusicIcon />} legend="327  Jesus paid it all" caption="Communion 1" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('communion2')}><ListItem leftIcon={<MusicIcon />} legend="318 - I hear Thy welcome voice " caption="Communion 2" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('prep_departed')}><ListItem leftIcon={<MusicIcon />} legend="347 - Come, share the Lord" caption="Preparation Departed" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('after_service')}><ListItem leftIcon={<MusicIcon />} legend="We will keep our faith alive" caption="After Service" /></NavLink>
        <NavLink className="clean-text" activeClassName="active-link" to={PDF('theme_song')}><ListItem leftIcon={<MusicIcon />} legend="In Christ we live and move" caption="Theme Song" /></NavLink>
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
  onYPCMusicClick: PropTypes.func.isRequired,
  ypcMusicOpen: PropTypes.bool.isRequired,
};

export default AppDrawer;
