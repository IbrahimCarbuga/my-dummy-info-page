import React from "react";
import { Dropdown } from "react-bootstrap";

export const LocaleDropdown = () => {
  var languages = [
    { id: 1, value: "tr" },
    { id: 2, value: "en" },
  ];
  const [value, setValue] = React.useState("");
  
 
  React.useEffect(() => {
    localStorage.setItem("language", value);
  }, [value]);

  const onSelect = (value: string) => {
    setValue(value);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dil
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map((language) => (
          <Dropdown.Item
            key={language.id}
            onSelect={() => onSelect(language.value)}
          >
            {language.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
