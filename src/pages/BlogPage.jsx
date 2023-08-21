import { useCallback, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import SinglePost from "../components/SinglePost";

export default function BlogPage() {
  const { fetchPostsFromServer: fetchPostsDataFromServer, posts } = usePosts();

  const fetchPosts = useCallback(fetchPostsDataFromServer, [
    fetchPostsDataFromServer,
  ]);

  console.log(posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <main className="d-flex flex-column gap-4 container mt-5">
        {posts.map((post) => {
          return <SinglePost post={post} key={post.id} />;
        })}
      </main>
    </>
  );
}
