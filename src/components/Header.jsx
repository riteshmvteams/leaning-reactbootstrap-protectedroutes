import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const {
    state: { isLogged },
  } = useAuth();
  return (
    <Navbar expand="lg" className="bg-dark-subtle py-3">
      <Container>
        <Link to="/" className="text-dark text-decoration-none fs-4 fw-bolder">
          LOGO
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-5 align-items-center">
            {isLogged ? (
              <>
                <NavLink
                  className="text-black text-uppercase text-decoration-none fw-medium"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  className="text-black text-uppercase text-decoration-none fw-medium"
                  to="/blogs"
                >
                  BlogPage
                </NavLink>
                <NavLink
                  className="text-black text-uppercase text-decoration-none fw-medium"
                  to="/settings"
                >
                  Account Settings
                </NavLink>
                <Button>LogOut</Button>
              </>
            ) : (
              <>
                <NavLink
                  className="text-black text-uppercase text-decoration-none fw-medium"
                  to="/blogs"
                >
                  BlogPage
                </NavLink>
                <NavLink
                  className="text-black text-uppercase text-decoration-none fw-medium"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="text-black text-uppercase text-decoration-none fw-medium"
                  to="/register"
                >
                  Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
