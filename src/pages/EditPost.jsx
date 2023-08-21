import { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "../components/Button";

export default function EditPost() {
  const { fetchSinglePost, editPost } = usePosts();
  const { id } = useParams();
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    createdBy: "",
    createdAt: "",
    id: "",
  });

  console.log(postData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setPostData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePostEdit = (e) => {
    e.preventDefault();
    if (!postData.title || !postData.description) return;

    editPost(postData, id);
    navigate("/blogs");

    postData.description = "";
    postData.title = "";

    console.log(postData);
  };

  useEffect(() => {
    fetchSinglePost(id).then((data) => {
      setPostData({
        title: data?.title,
        description: data?.description,
        createdBy: data?.createdBy,
        createdAt: data?.createdAt,
        id: data?.id,
      });
    });
  }, []);

  return (
    <main className="container mt-5">
      <Form onSubmit={handlePostEdit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label> Post Title</Form.Label>
          <Form.Control
            value={postData?.title}
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
            value={postData?.description}
            onChange={handleChange}
            placeholder="Enter Description"
            rows={3}
            name="description"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Edit Post
        </Button>
      </Form>
    </main>
  );
}
