import { Form } from "react-bootstrap";
import Button from "../components/Button";

export default function Dashboard() {
  return (
    <main className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Post Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Post Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
}
