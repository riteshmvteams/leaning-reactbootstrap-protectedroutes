import Button from "./Button";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { usePosts } from "../hooks/usePosts";
import { useNavigate } from "react-router-dom";

export default function SinglePost({ post }) {
  const navigate = useNavigate();
  const { deletePost } = usePosts();

  const handleEditBtn = () => {
    navigate(`/edit/${post.id}`);
  };
  return (
    <div className="post__single">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <div className="d-flex gap-2">
        <Button
          disabled={false}
          classN="d-flex align-items-center gap-1 bg-success"
          onClick={handleEditBtn}
        >
          Edit <FiEdit />
        </Button>
        <Button
          disabled={false}
          classN="d-flex align-items-center gap-1 text-white bg-danger"
          onClick={() => deletePost(post.id)}
        >
          Delete <RiDeleteBinFill />
        </Button>
      </div>
    </div>
  );
}
