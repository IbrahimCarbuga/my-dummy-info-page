import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const LocaleDropdown= () => {
  var languages = [
    { id: 1, value: "tr" },
    { id: 2, value: "en" },
  ];
  const [language, setLanguage] = useState("");
  const { i18n } = useTranslation();
  useEffect(() => {
    const localStorageData = localStorage.getItem("language");
    const i18Data = localStorage.getItem("i18nextLng");

    if (localStorageData !== null) {
      setLanguage(localStorageData);
      i18n.changeLanguage(localStorageData);
    } else if (i18Data !== null) {
      setLanguage(i18Data);
      localStorage.setItem("language", i18Data);
    }
  }, [i18n]);

  const onSelect = (value: string) => {
    localStorage.setItem("language", value);
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {language}
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
