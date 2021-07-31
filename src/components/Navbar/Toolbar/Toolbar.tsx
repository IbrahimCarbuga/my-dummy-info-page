import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../redux/model/user";
import { LocaleDropdown } from "../../LocaleDropdown";
import { LoginInfoDropdown } from "../../LoginInfoDropdown";
import { LoginModal } from "../../LoginModal";
import { DrawerToggleButton } from "../DrawerToggleButton/DrawerToggleButton";
import { NavItem, navItemList } from "../utils";
import "./Toolbar.css";

type Props = {
  drawerClickHandler: () => void;
  selectRoute: (Route: NavItem) => void;
  selectedTabIndex: number;
};

export const Toolbar: React.FC<Props> = ({
  selectedTabIndex,
  drawerClickHandler,
  selectRoute
}) => {
  const { t } = useTranslation();
  const userInfo = useSelector((state: UserState) => state.user);
  const [showModal, setShowModal] = useState(false);
  console.log(userInfo)
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-navigation-items">
          <ul>
            {navItemList.map((navItem: NavItem) => (
              <li
                key={navItem.tabIndex}
                className={`${
                  navItem.tabIndex === selectedTabIndex ? "active-item" : ""
                } `}
                onClick={() => selectRoute(navItem)}
              >
                {t(navItem.name)}
              </li>
            ))}
          </ul>
        </div>
        <div className="toolbar-logo">{/* <img src={logo} /> */}</div>
        <div className="spacer" />

        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        {userInfo ? (
          <LoginInfoDropdown />
        ) : (
          <>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              {t("Login")}
            </Button>
            <LoginModal show={showModal} close={() => setShowModal(false)} />
          </>
        )}

        <LocaleDropdown />
      </nav>
    </header>
  );
};
