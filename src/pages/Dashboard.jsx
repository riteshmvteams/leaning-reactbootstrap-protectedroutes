import { Form } from "react-bootstrap";
import Button from "../components/Button";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { usePosts } from "../hooks/usePosts";

export default function Dashboard() {
  const { state } = useAuth();
  const { sendPostToServer } = usePosts();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    createdBy: state.user.name,
  });

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postData.title || !postData.description) return;

    sendPostToServer(postData);
    postData.title = "";
    postData.description = "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setPostData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <main className="container mt-5">
      <Form onSubmit={handlePostSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label> Post Title</Form.Label>
          <Form.Control
            value={postData.title}
            onChange={handleChange}
            type="text"
            placeholder="Enter Post Title"
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post Description</Form.Label>
          <Form.Control
            as="textarea"
            value={FormData.description}
            onChange={handleChange}
            rows={3}
            name="description"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
}
