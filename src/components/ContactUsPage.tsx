import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const ContactUsPage = () => {
  const countryList = [
    { id: "TR", name: "Turkey" },
    { id: "US", name: "United States of America" },
    { id: "GB", name: "United Kingdom" },
    { id: "DE", name: "Germany" },
    { id: "SE", name: "Sweden" },
    { id: "KE", name: "Kenya" },
    { id: "BR", name: "Brazil" },
    { id: "ZW", name: "Zimbabwe" },
  ];
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="userName"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textField">
          <Form.Label>Text Field</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="textField"
            value={user.textField}
            onChange={(e) => setUser({ ...user, textField: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="select"
            name="country"
            onChange={(e) => 
              setUser({ ...user, country: e.target.value })
            }
          >
            {countryList.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};
