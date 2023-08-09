import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-dark-subtle py-3">
      <Container>
        <Link to="/" className="text-dark text-decoration-none fs-4 fw-bolder">
          LOGO
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3">
            <NavLink
              className="text-primary text-decoration-none fw-medium"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="text-primary text-decoration-none fw-medium"
              to="/register"
            >
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
