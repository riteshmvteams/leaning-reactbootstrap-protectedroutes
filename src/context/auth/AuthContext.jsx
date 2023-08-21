import { createContext, useReducer } from "react";
import { authReducer, initialState } from "./authReducer";

// created the context
export const AuthContext = createContext(null);

// context provide
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
