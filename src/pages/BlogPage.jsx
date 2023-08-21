import { useCallback, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import SinglePost from "../components/SinglePost";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function BlogPage() {
  const navigate = useNavigate();
  const { fetchPostsFromServer: fetchPostsDataFromServer, posts } = usePosts();

  const fetchPosts = useCallback(fetchPostsDataFromServer, [
    fetchPostsDataFromServer,
  ]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <main className="d-flex flex-column gap-4 container mt-5">
        {posts.length > 0 ? (
          posts?.map((post) => {
            return <SinglePost post={post} key={post.id} />;
          })
        ) : (
          <>
            <h1 className="text-center">No Posts Available Create new Post</h1>
            <Button onClick={() => navigate("/dashboard")}>Create Post</Button>
          </>
        )}
      </main>
    </>
  );
}
