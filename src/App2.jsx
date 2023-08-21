import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AccountSettings from "./pages/AccountSettings";
import MainLayout from "./layout/MainLayout";
import EditPost from "./pages/EditPost";

export default function App2() {
  const {
    state: { authorizationToken },
  } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
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
          path: "/dashboard",
          element: (
            <ProtectedRoute isLogged={authorizationToken}>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/settings",
          element: (
            <ProtectedRoute isLogged={authorizationToken}>
              <AccountSettings />
            </ProtectedRoute>
          ),
        },
        {
          path: "/edit/:id",
          element: (
            <ProtectedRoute isLogged={authorizationToken}>
              <EditPost />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
