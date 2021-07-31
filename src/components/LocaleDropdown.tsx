import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/action/user";
import { UserState } from "../redux/model/user";

export const LocaleDropdown = () => {
  var languages = [
    { id: 1, value: "tr" },
    { id: 2, value: "en" },
  ];

  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const language = useSelector((state: UserState) => state.language);

  useEffect(() => {
    const localStorageData = localStorage.getItem("language");
    const i18Data = localStorage.getItem("i18nextLng");

    if (localStorageData !== null) {
      dispatch(setLanguage(localStorageData));
      i18n.changeLanguage(localStorageData);
    } else if (i18Data !== null) {
      dispatch(setLanguage(i18Data));
      localStorage.setItem("language", i18Data);
    }
  }, [i18n, dispatch]);

  const onSelect = (value: string) => {
    localStorage.setItem("language", value);
    dispatch(setLanguage(value));
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
