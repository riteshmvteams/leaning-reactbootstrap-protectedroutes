import { Navigate } from "react-router-dom";

// type Props = {
//   isLogged: Boolean,
//   children: React.ReactNode,
// };

export default function ProtectedRoute({ isLogged, children }) {
  if (!isLogged) {
    return <Navigate to="/" replace />;
  }
  return children;
}
