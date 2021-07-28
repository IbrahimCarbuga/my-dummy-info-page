import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {Backdrop} from './Backdrop/Backdrop';
import {SideDrawer} from './SideDrawer/SideDrawer';
import {Toolbar} from './Toolbar/Toolbar';
import { NavItem } from './utils';

export const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOper] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const history = useHistory();

  const selectRoute = (navItem: NavItem) => {
    setSelectedTabIndex(navItem.tabIndex);
    setSideDrawerOper(false);
    history.push(navItem.path);
  };

  const drawerToggleClickHandler = () => {
    setSideDrawerOper(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOper(false);
  };

  const render = () => {
    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={backdropClickHandler} />;
    }
    return (
      <>
        <Toolbar selectedTabIndex={selectedTabIndex} drawerClickHandler={drawerToggleClickHandler} selectRoute={selectRoute} logout={()=>{}} />
        <SideDrawer
          selectedTabIndex={selectedTabIndex}
          show={sideDrawerOpen}
          selectRoute={selectRoute}
          logout={()=>{}}
        />
        {backdrop}
      </>
    );
  };

  return render();
};