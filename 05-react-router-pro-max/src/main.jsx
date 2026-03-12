import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";

import "bootstrap/dist/css/boostrap.min.css";
import "bootstrap/dist/js/boostrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
