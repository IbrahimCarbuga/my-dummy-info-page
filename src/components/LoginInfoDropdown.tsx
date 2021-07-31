import React from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/action/user";
import { UserState } from "../redux/model/user";

export const LoginInfoDropdown = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user);

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        {user?.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>{user?.email}</Dropdown.Item>
        <Dropdown.Item onClick={logout}>{t("Logout")}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
