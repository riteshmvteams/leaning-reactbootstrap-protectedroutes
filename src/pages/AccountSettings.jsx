import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";

export default function AccountSettings() {
  const { state, dispatch } = useAuth();
  const [user, setUser] = useState({
    name: state.user.name || "",
    email: state.user.email || "",
    file: state.user.file || "",
  });

  console.log(user);

  // upload file
  const handleFileUpload = (e) => {
    setUser((prev) => ({
      ...prev,
      file: URL.createObjectURL(e.target.files[0]),
    }));
  };

  // onsubmit of form
  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.file) return;

    dispatch({ type: "saveUser", payload: user });
  };

  return (
    <main className="container">
      <div className="mt-5">
        {state.user?.name ? (
          <h2>Edit User Details</h2>
        ) : (
          <h2>Save User Details</h2>
        )}
        <form onSubmit={handleUserSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </Form.Group>
          <div className="d-flex gap-5 align-items-center">
            <Form.Group controlId="formFile" className="mb-3 w-50">
              <Form.Label>Select profile Image</Form.Label>
              <Form.Control type="file" multiple onChange={handleFileUpload} />
            </Form.Group>

            {user.file === "" ? (
              <h4>Preview</h4>
            ) : (
              <figure className="avatar">
                <img src={user.file} alt="userImg" />
              </figure>
            )}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </main>
  );
}
