import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router";

import { router } from "./Routes/Routes.jsx";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
      toastStyle={{
        borderRadius: "14px",
        background: "#fff",
        color: "#111827",
        fontSize: "14px",
        fontWeight: "500",
        padding: "14px 16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        border: "1px solid #fed7aa",
      }}
    />
  </StrictMode>,
);