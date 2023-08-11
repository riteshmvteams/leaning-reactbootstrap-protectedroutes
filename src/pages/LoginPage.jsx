import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const { dispatch } = useAuth();
  const [showPassWord, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // this will run on submission of login form
  const handleSubmit = (e) => {
    e.preventDefault();

    const getUserToken = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userName, password: password }),
      };
      try {
        const response = await fetch(
          "https://dummyjson.com/auth/login",
          options
        );
        if (!response.ok) {
          throw new Error("Something went wrong pls try again");
        }
        const result = await response.json();

        console.log(result);
        dispatch({ type: "loggedIn", payload: { token: result.token } });
      } catch (error) {
        console.log(error);
      }
    };

    getUserToken();
  };

  return (
    <Container className="mt-4">
      <h1 className="fs-1 mb-5">Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="UserName"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassWord ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputGroup.Text>
              <Button onClick={() => setShowPassword((prev) => !prev)}>
                {showPassWord ? "Hide" : "Show"}
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
}
