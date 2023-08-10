import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

export default function LoginPage() {
  const [showPassWord, setShowPassword] = useState(false);

  // this will run on submission of register form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="mt-4">
      <h1 className="fs-1 mb-5">Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="email" placeholder="Email Address" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassWord ? "text" : "password"}
              placeholder="Password"
              name="password"
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
