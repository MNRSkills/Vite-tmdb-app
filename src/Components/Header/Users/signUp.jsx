import { useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import { useUserSignUpMutation } from "../../../features/api/apiSlice";

const signUp = () => {
  const [user, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const { userSignUp } = useUserSignUpMutation();
  console.log("is this the function", userSignUp);
  const handleSubmit = (e) => {
    // console.log("TIS IS SUBMIT", user, email, password);
    // userSignUp({ user, email, password });
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="name"
          value={user}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button type="submit">Sign up</Button>
      </Form.Group>
    </Form>
  );
};

export default signUp;
