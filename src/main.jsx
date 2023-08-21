import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App2 from "./App2.jsx";
import "./index.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// context
import AuthProvider from "./context/auth/AuthContext.jsx";
import PostProvider from "./context/posts/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PostProvider>
        {/* <App /> */}
        <App2 />
      </PostProvider>
    </AuthProvider>
  </React.StrictMode>
);
