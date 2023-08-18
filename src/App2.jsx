import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AccountSettings from "./pages/AccountSettings";

export default function App2() {
  const {
    state: { authorizationToken },
  } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blogs",
      element: <BlogPage />,
    },
    {
      path: "/login",
      element: (
        <ProtectedRoute isLogged={!authorizationToken}>
          <LoginPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <ProtectedRoute isLogged={!authorizationToken}>
          <RegisterPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <ProtectedRoute isLogged={authorizationToken}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <ProtectedRoute isLogged={authorizationToken}>
          <AccountSettings />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
