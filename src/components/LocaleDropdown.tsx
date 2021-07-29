import React from "react";
import { Dropdown } from "react-bootstrap";

export const LocaleDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dil
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">TR</Dropdown.Item>
        <Dropdown.Item href="#/action-2">EN</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
