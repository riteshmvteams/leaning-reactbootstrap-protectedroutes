import { useCallback, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";

export default function BlogPage() {
  const { fetchPostsFromServer: fetchPostsDataFromServer } = usePosts();

  const fetchPosts = useCallback(fetchPostsDataFromServer, [
    fetchPostsDataFromServer,
  ]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <h1 className="fs-1 mt-5 text-center">
      This Page shows to both Authenticated and Non-Authenticated user
    </h1>
  );
}
