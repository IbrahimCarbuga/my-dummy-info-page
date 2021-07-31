import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const LoginInfoDropdown = () => {
  const { t } = useTranslation();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Kullanıcı UserNamesi gelecek
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Mail gelecek</Dropdown.Item>
        <Dropdown.Item onClick={() =>localStorage.removeItem('user')}>{t("Logout")}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
