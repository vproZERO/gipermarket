import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Aos from "aos";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root"), Aos.init()).render(
  <BrowserRouter>
    <App />
    <ToastContainer position="bottom right" />
  </BrowserRouter>
);
