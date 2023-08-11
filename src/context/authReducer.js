// definined the initial state for reducer
export const initialState = {
  isLogged: false,
  authorizationToken: localStorage.getItem("token") || null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "loggedIn":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLogged: true,
        authorizationToken: action.payload.token,
      };

    case "logOut":
      localStorage.removeItem("token");
      return { ...state, authorizationToken: null };

    default:
      return { ...state };
  }
};
