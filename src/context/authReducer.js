// definined the initial state for reducer
export const initialState = {
  isLogged: false,
};

export const authReducer = (state, action) => {
  switch (action) {
    case "validate":
      return {
        ...state,
      };

    default:
      break;
  }
};
