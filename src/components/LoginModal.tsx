import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LocaleDropdown } from "./LocaleDropdown";

type Props = {
  show: boolean;
  close: () => void;
};

export const LoginModal: React.FC<Props> = ({ show, close }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const login = () => {
    localStorage.setItem('user', JSON.stringify(user))
    close();
  };

  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header>
          <Modal.Title>{t("LoginModal")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <LocaleDropdown />
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{t("Name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("Email")}</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("Password")}</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => close()}>
            {t("Close")}
          </Button>
          <Button variant="primary" onClick={login}>
          {t("Login")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
