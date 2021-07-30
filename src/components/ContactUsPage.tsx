import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const ContactUsPage = () => {
  const { t, i18n } = useTranslation();
  let countryList = [];
  if (i18n.language === "tr") {
    countryList = [
      { id: "TR", name: "Türkiye" },
      { id: "US", name: "Amerika Birleşik Devletleri" },
      { id: "GB", name: "Birleşik Krallık" },
      { id: "DE", name: "Almanya" },
      { id: "SE", name: "İsveç" },
      { id: "KE", name: "Kenya" },
      { id: "BR", name: "Brezilya" },
      { id: "ZW", name: "Zimbabve" },
    ];
  } else {
    countryList = [
      { id: "TR", name: "Turkey" },
      { id: "US", name: "United States of America" },
      { id: "GB", name: "United Kingdom" },
      { id: "DE", name: "Germany" },
      { id: "SE", name: "Sweden" },
      { id: "KE", name: "Kenya" },
      { id: "BR", name: "Brazil" },
      { id: "ZW", name: "Zimbabwe" },
    ];
  }

  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    textField: "",
    country: "",
  });

  const submit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(user));
  };

  return (
    <div className="container pageContainer">
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>{t("Name")}</Form.Label>
          <Form.Control
            type="text"
            name="userName"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("Email")}</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>{t("PhoneNumber")}</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textField">
          <Form.Label>{t("TextField")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="textField"
            value={user.textField}
            onChange={(e) => setUser({ ...user, textField: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>{t("Country")}</Form.Label>
          <Form.Control
            as="select"
            name="country"
            onChange={(e) => setUser({ ...user, country: e.target.value })}
          >
            {countryList.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          {t("Send")}
        </Button>
      </Form>
    </div>
  );
};
