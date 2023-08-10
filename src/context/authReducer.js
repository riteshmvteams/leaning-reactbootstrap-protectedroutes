// definined the initial state for reducer
export const initialState = {
  isLogged: false,
  authorizationToken: null,
};

export const authReducer = (state, action) => {
  switch (action) {
    case "loggedIn":
      return {
        ...state,
        isLogged: true,
      };
    case "logOut":
      return {
        ...state,
        isLogged: false,
      };
    default:
      return { ...state };
  }
};
