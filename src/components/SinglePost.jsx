import Button from "./Button";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

export default function SinglePost({ post }) {
  return (
    <div className="post__single">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <div className="d-flex gap-2">
        <Button
          disabled="false"
          classN="d-flex align-items-center gap-1 bg-success"
        >
          Edit <FiEdit />
        </Button>
        <Button
          disabled="false"
          classN="d-flex align-items-center gap-1 text-white bg-danger"
        >
          Delete <RiDeleteBinFill />
        </Button>
      </div>
    </div>
  );
}
