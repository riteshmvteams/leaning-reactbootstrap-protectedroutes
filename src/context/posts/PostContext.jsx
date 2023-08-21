import { createContext, useReducer } from "react";
import { initialState, postReducer } from "./postReducer";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [{ posts, loading, error, editPostData }, dispatch] = useReducer(
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

  const sendPostToServer = async (data) => {
    const postData = {
      ...data,
      createdAt: Date.now(),
    };

    const options = {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      dispatch({ type: "posts/loading" });
      const response = await fetch("http://localhost:8080/posts", options);
      // Manually throwing error if response.ok true
      if (!response.ok) {
        throw new Error("Something went wrong... please try again later");
      }
      const data = await response.json();

      console.log(data);
    } catch (error) {
      dispatch({ type: "posts/error", payload: error.message });
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    const options = {
      method: "DELETE",
    };
    try {
      dispatch({ type: "posts/loading" });
      const response = await fetch(
        `http://localhost:8080/posts/${id}`,
        options
      );
      await response.json();
      const postAfterDelete = posts.filter((post) => {
        return post.id !== id;
      });
      dispatch({ type: "posts/delete", payload: postAfterDelete });
    } catch (error) {
      dispatch({ type: "posts/error", payload: error.message });
      console.log(error);
    }
  };

  const fetchSinglePost = async (id) => {
    try {
      dispatch({ type: "posts/loading" });
      const response = await fetch(`http://localhost:8080/posts/${id}`);
      // Manually throwing error if response.ok true
      if (!response.ok) {
        throw new Error("Something went wrong... please try again later");
      }
      const data = await response.json();
      dispatch({ type: "posts/single", payload: data });
      console.log(data);

      return data;
    } catch (error) {
      dispatch({ type: "posts/error", payload: error.message });
      console.log(error);
    }
  };

  const editPost = async (data, id) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      dispatch({ type: "posts/loading" });
      const response = await fetch(
        `http://localhost:8080/posts/${id}`,
        options
      );
      // Manually throwing error if response.ok true
      if (!response.ok) {
        throw new Error("Something went wrong... please try again later");
      }
      const data = await response.json();

      console.log(data);
    } catch (error) {
      dispatch({ type: "posts/error", payload: error.message });
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        error,
        fetchPostsFromServer,
        sendPostToServer,
        deletePost,
        fetchSinglePost,
        editPostData,
        editPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
