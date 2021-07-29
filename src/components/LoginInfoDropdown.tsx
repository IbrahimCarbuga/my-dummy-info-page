import React from "react";
import { Dropdown } from "react-bootstrap";

export const LoginInfoDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Kullanıcı Bilgisi Gelecek
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Email Gelecek</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
