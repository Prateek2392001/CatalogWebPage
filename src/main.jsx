import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/Portfolio.css";
import "./assets/css/about-luxury.css";
import "./assets/css/services.css";
import "./assets/css/Blog.css";
import "./assets/css/contact.css";
import "./assets/css/Home.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
