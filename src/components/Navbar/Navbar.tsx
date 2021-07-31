import React, {useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {Backdrop} from './Backdrop/Backdrop';
import {SideDrawer} from './SideDrawer/SideDrawer';
import {Toolbar} from './Toolbar/Toolbar';
import { NavItem, navItemList } from './utils';

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

  useEffect(() => {
    let unmounted = false;
    let unregisterCallback: () => void;

    if (!unmounted) {
      //init tab selection
     const currentTabIndex = navItemList.find((nv) => nv.path === history.location.pathname);
     if ( currentTabIndex !== undefined){
      setSelectedTabIndex(currentTabIndex.tabIndex);
     }

      unregisterCallback = history.listen((location) => {
        const currentTabIndex = navItemList.find((nv) => nv.path === location.pathname);
        if ( currentTabIndex !== undefined){
         setSelectedTabIndex(currentTabIndex.tabIndex);
        }
      });
    }
    return () => {
      unmounted = true;
      if (unregisterCallback) unregisterCallback();
    };
  }, [history]);

  const render = () => {
    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={backdropClickHandler} />;
    }
    return (
      <>
        <Toolbar selectedTabIndex={selectedTabIndex} drawerClickHandler={drawerToggleClickHandler} selectRoute={selectRoute}/>
        <SideDrawer
          selectedTabIndex={selectedTabIndex}
          show={sideDrawerOpen}
          selectRoute={selectRoute}         
        />
        {backdrop}
      </>
    );
  };

  return render();
};