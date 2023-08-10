import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
// components
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
// Custom hook for using the auth context
import { useAuth } from "./hooks/useAuth";
import BlogPage from "./pages/BlogPage";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  // getting value from the context
  const {
    state: { isLogged },
  } = useAuth();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute isLogged={!isLogged}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute isLogged={!isLogged}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <AccountSettings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
