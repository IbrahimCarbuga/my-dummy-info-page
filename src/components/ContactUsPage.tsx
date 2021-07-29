import React from "react";
import { Button, Container, Form } from "react-bootstrap";

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

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="countryDropdown">
          <Form.Label>Country</Form.Label>
          <Form.Control as="select">
            {countryList.map((country) => (
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};
