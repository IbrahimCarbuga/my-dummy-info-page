import React from 'react';
import { NavItem, navItemList } from '../utils';
import './SideDrawer.css';

type Props = {
  show: boolean;
  selectedTabIndex: number;
  selectRoute: (Route: NavItem) => void;
}

export const SideDrawer: React.FC<Props> = ({
  show,
  selectedTabIndex,
  selectRoute
}) => {
  let drawerClasses = 'side-drawer';

  if (show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
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
      </nav>
  )};

