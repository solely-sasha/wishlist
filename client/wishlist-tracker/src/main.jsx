import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <Router>
        <App />
      </Router>
    </WishlistProvider>
  </StrictMode>
);
