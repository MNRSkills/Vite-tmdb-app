import React from "react";
import { Link } from "react-router-dom";
// import NavItem from 'react-bootstrap/Nav';
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar>
      <Container>
        <h1>LOGO</h1>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/popular">
          <span>Popular</span>
        </Link>
        <Link to="/top-rated">
          <span>Top Rated</span>
        </Link>
        <Link to="/sign-up">
          <span>Sign Up</span>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Nav;
