import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import {
  Form,
  Col,
  Row,
  Button,
  Container,
  Alert,
  Card,
} from "react-bootstrap";

import { useUserSignUpMutation } from "../../../features/api/apiSlice";

const signUp = () => {
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [userSignUp, response] = useUserSignUpMutation();
  const { isLoading, isSuccess, isError, data: newUsers, error } = response;
  // const { data: errorMsg } = error;
  console.log(
    error?.data.msg,
    isLoading,
    isSuccess,
    isError,
    "THIS IS THE RESPONSE"
  );
  console.log("LOOKING FOR USERS", newUsers);
  //THIS IS WHAT WE NEED TO GENERATE THE MESSAGE FOR SUCCESS
  //LATER FOR AN ERROR WE WILL NEED TO DISPLAY THE MESSAGE THERE
  //SHOULD WE RE-ROUTE THE USER TO A DASHBOARD WE NEED TO DISCUSS
  //  const { data: newUsers, }
  const handleSubmit = (e) => {
    userSignUp({ name, email, password });
    // if (isSuccess) {
    //   console.log("THIS IS WORKING P");
    // } else if (isError) {
    //   console.log("THIS ID BOT");
    // }
    e.preventDefault();
  };

  // IN THE RETURN WE WILL HAVE A CONDITIONAL WITH ISSUCCESS OR ISERROR AND ISLOADING
  //USER TERNARY OR ONLINE CONDITIONAL

  return (
    <Container>
      {isSuccess ? <Alert variant="success">Success</Alert> : null}
      {isError ? (
        <Alert variant="warning">This email already exist!</Alert>
      ) : null}
      <Row className="justify-content-md-center">
        <Col sm >
          <Card>
            <Card.Img
              variant="top"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            ></Card.Img>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                This is just a filler for the paragaraphs written on here. I
                should take up as much space explaining why this offer is best.
                Sign up and have a list of your favorite and want to see movies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md lg="4">
          <Form onSubmit={handleSubmit} className="m-3">
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                variant="name"
                type="name"
                value={name}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Form.Label>Your Email</Form.Label>
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
            </Form.Group>
            <Button variant="success" type="submit" className="m-3 " size="lg">
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default signUp;
