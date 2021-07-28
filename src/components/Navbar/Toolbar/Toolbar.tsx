import React from 'react';
import {DrawerToggleButton} from '../DrawerToggleButton/DrawerToggleButton';
import { NavItem, navItemList } from '../utils';
import './Toolbar.css';

type Props = {
  drawerClickHandler: () => void;
  selectRoute: (Route: NavItem) => void;
  selectedTabIndex: number;
  logout: () => void;
}

export const Toolbar: React.FC<Props> = ({ selectedTabIndex, drawerClickHandler, selectRoute, logout }) => (
  <header className="toolbar">
    <nav className="toolbar-navigation">  
    <div className="toolbar-navigation-items">
        <ul>
          {navItemList.map((navItem: NavItem) => (
            <li
              key={navItem.tabIndex}
              className={`${
                navItem.tabIndex === selectedTabIndex ? 'active-item' : ''
              } `}
              onClick={() => selectRoute(navItem)}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </div>    
      <div className="toolbar-logo">
        {/* <img src={logo} /> */}
      </div>
      <div className="spacer" />
      
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
    </nav>
  </header>
);
