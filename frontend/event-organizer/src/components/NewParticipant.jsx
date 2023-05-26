import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const NewParticipant = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/participants", form)
      .then((response) => {
        console.log("successful response", response);
        alert("Entry added successfully");
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter name</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter surname</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="surname"
          type="text"
          placeholder="Surname"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter email</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter phone number</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
        />
      </Form.Group>
      <Button onClick={handleOnSubmit} variant="dark">
        add new participant
      </Button>
    </Form>
  );
};
