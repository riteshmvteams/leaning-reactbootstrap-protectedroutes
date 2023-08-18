import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App2 from "./App2.jsx";
import "./index.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// context
import AuthProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <App /> */}
      <App2 />
    </AuthProvider>
  </React.StrictMode>
);
