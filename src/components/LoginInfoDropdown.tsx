import React from "react";
import { Dropdown } from "react-bootstrap";

export const LoginInfoDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Kullanıcı Bilgisi Gelecek
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Email gelecek</Dropdown.Item>
        <Dropdown.Item onClick={() =>localStorage.removeItem('user')}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
