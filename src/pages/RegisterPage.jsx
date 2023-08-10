// import { useState } from "react";
// import { Button, Container, Form, InputGroup } from "react-bootstrap";

import { Button } from "react-bootstrap";

export default function RegisterPage() {
  // const [showPassWord, setShowPassword] = useState(false);
  // const [registerFields, setRegisterFields] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // this will run on submission of register form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     (registerFields.name === "",
  //     registerFields.email === "",
  //     registerFields.password === "")
  //   ) {
  //     return;
  //   }

  //   alert("submitted");
  // };

  // handle the input field value controlled inputs
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setRegisterFields((preVal) => ({ ...preVal, [name]: value }));
  // };

  return (
    // <Container className="mt-4">
    //   <h1 className="fs-1 mb-5">Register Form</h1>
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicName">
    //       <Form.Label>Full Name</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter Full Name"
    //         name="name"
    //         value={registerFields.name}
    //         onChange={handleChange}
    //         pattern=".{3,}"
    //       />
    //       <Form.Text className="text-muted">
    //         Name should be greater than 3 char
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email Address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Email Address"
    //         name="email"
    //         value={registerFields.email}
    //         onChange={handleChange}
    //         pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    //       />
    //       <Form.Text className="text-muted">
    //         Please Match the email pattern
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <InputGroup>
    //         <Form.Control
    //           type={showPassWord ? "text" : "password"}
    //           placeholder="Password"
    //           name="password"
    //           value={registerFields.password}
    //           onChange={handleChange}
    //           pattern="^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{7,11}$"
    //         />
    //         <InputGroup.Text>
    //           <Button onClick={() => setShowPassword((prev) => !prev)}>
    //             {showPassWord ? "Hide" : "Show"}
    //           </Button>
    //         </InputGroup.Text>
    //       </InputGroup>
    //       <Form.Text className="text-muted">
    //         Password greater than 6 but less than 12. Also 1 Capital letter and
    //         1 special character mandatory
    //       </Form.Text>
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Register Now
    //     </Button>
    //   </Form>
    // </Container>

    // getting userName and password
    <>
      <h2 className="text-center mt-5">Get Username and password for login</h2>
      <div className="text-center mt-3">
        <Button>Get Username and password</Button>
      </div>

      <main>
        <div className="text-center mt-5">
          <h4>Username: ritesh@gmal.com</h4>
          <h4>Password: sdfsdsaf545</h4>
        </div>
        <div className="text-center mt-5">
          <h4>Username: ritesh@gmal.com</h4>
          <h4>Password: sdfsdsaf545</h4>
        </div>
        <div className="text-center mt-5">
          <h4>Username: ritesh@gmal.com</h4>
          <h4>Password: sdfsdsaf545</h4>
        </div>
      </main>
    </>
  );
}
