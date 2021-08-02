import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/action/user";
import { UserState } from "../../../redux/model/user";
import { NavItem, navItemList } from "../utils";
import "./SideDrawer.css";

type Props = {
  show: boolean;
  selectedTabIndex: number;
  selectRoute: (Route: NavItem) => void;
  loginClick: () => void;
};

export const SideDrawer: React.FC<Props> = ({
  show,
  selectedTabIndex,
  selectRoute,
  loginClick,
}) => {
  let drawerClasses = "side-drawer";
  const { t } = useTranslation();
  if (show) {
    drawerClasses = "side-drawer open";
  }
  const userInfo = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
  };
  return (
    <nav className={drawerClasses}>
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
        {userInfo ? (
          <>
            <li key={4}>
              {userInfo.name}
            </li>
            <li key={3} onClick={logout}>
              {t("Logout")}
            </li>
          </>
        ) : (
          <li key={2} onClick={loginClick}>
            {t("Login")}
          </li>
        )}
      </ul>
    </nav>
  );
};
