import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import UserAvatar from "./UserAvatar";

export default function Header() {
  const {
    state: { authorizationToken },
    dispatch,
  } = useAuth();
  return (
    <Navbar expand="lg" className="bg-dark-subtle py-3">
      <Container>
        <Link to="/" className="text-dark text-decoration-none fs-4 fw-bolder">
          LOGO
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-4 align-items-center">
            {authorizationToken ? (
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
                <Button onClick={() => dispatch({ type: "logOut" })}>
                  LogOut
                </Button>
                <UserAvatar />
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
