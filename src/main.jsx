import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
  position="top-right"
  toastOptions={{
    duration: 5000,
    style: {
      minWidth: "400px",
      padding: "20px 24px",
      borderRadius: "12px",
      fontSize: "17px",
      fontWeight: "700",
      background: "#B91C1C",
      color: "#ffffff",
      boxShadow: "0 12px 30px rgba(185, 28, 28, 0.35)",
    },
    success: {
      iconTheme: {
        primary: "#ffffff",
        secondary: "#B91C1C",
      },
    },
  }}
/>

    </BrowserRouter>
  </StrictMode>
);
