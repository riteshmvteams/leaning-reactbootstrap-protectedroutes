import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext(null);

const initialState = {
  isLogged: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
