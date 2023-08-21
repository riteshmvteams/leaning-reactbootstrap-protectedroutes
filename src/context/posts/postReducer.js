const initialState = {
  posts: [],
  loading: false,
  error: "",
  editPostData: {},
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "posts/loading":
      return { ...state, loading: true };
    case "posts/loaded":
      return { ...state, posts: action.payload, loading: false };
    case "posts/error":
      return { ...state, posts: [], loading: false, error: action.payload };
    case "posts/delete":
      return { ...state, loading: false, posts: action.payload };
    case "posts/single":
      return { ...state, loading: false, editPostData: action.payload };
    default:
      return state;
  }
};

export { postReducer, initialState };
