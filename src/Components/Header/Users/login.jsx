import { useEffect, useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

import { useLoginUserMutation } from "../../../features/api/apiSlice";

const Login = () => {
  const [login, setCreds] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, response] = useLoginUserMutation();

  // q: show me what the response is for useLoginUserMutation
  // console.log("response", response);
  // q: will state (login) be updated with the response?
  //

  console.log("success", login);
  const {
    isLoading,
    isSuccess,
    isError,
    data: LogginSuccessful,
    error,
  } = response;

  //DECONSTRUCTING A

  const handleLogin = (e) => {
    loginUser({ email, password });
    // if (response) {
    //   setCreds(LogginSuccessful);
    // } else if (isError) {
    //   setErrorMsg(error.data.msg);
    // }

    e.preventDefault();
  };
  // q: how should I create a condition that will check for the response?
  // q: how should I create a condition that will check for the error?
  //  if (isSuccess) {
  //   console.log("THIS IS WORKING P");

  return (
    <>
      {isSuccess ? <Alert variant="success">Success</Alert> : null}
      {isError ? (
        <Alert variant="warning">This email already exist!</Alert>
      ) : null}
      <Form className="m-3" onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="m-3 " size="lg">
          Sign up
        </Button>
      </Form>
    </>
  );
};

export default Login;
