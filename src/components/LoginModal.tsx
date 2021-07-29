import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { LocaleDropdown } from "./LocaleDropdown";

type Props = {
  show: boolean;
  close: () => void;
};

export const LoginModal: React.FC<Props> = ({ show, close }) => {
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
        <Modal.Header closeButton>
          <Modal.Title>Login Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <LocaleDropdown />
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => close()}>
            Close
          </Button>
          <Button variant="primary" onClick={login}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
