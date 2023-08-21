import { createContext, useReducer, useMemo } from "react";
import { initialState, postReducer } from "./postReducer";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [{ posts, loading, error }, dispatch] = useReducer(
    postReducer,
    initialState
  );

  const fetchPostsFromServer = async () => {
    try {
      dispatch({ type: "posts/loading" });
      const response = await fetch("http://localhost:8080/posts");
      // Manually throwing error if response.ok true
      if (!response.ok) {
        throw new Error("Something went wrong... please try again later");
      }
      const data = await response.json();
      dispatch({ type: "posts/loaded", payload: data });
      console.log(data);
    } catch (error) {
      dispatch({ type: "posts/error", payload: error.message });
      console.log(error);
    }
  };

  const value = useMemo(() => {
    return { posts, loading, error, fetchPostsFromServer };
  }, [posts, loading, error]);
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostProvider;
