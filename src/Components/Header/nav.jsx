import React from "react";
import { Link } from "react-router-dom";
// import NavItem from 'react-bootstrap/Nav';
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  const logo = {
    margin: "1em",
    // backgroundUrl: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand className="nav-brand">
          <img
            // src={`${logo}`}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt="TMDB LOGO"
          />
        </Navbar.Brand>
        <Navbar.Toggle area-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/popular">
              <span>Popular</span>
            </Link>
            <Link to="/top-rated">
              <span>Top Rated</span>
            </Link>
            <div className="user-setup">
              <Link to="/sign-up">
                <span>Sign Up</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
