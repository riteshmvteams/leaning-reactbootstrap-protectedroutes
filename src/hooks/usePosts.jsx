import { useContext } from "react";
import { PostContext } from "../context/posts/PostContext";

export const usePosts = () => {
  const context = useContext(PostContext);
  return context;
};
