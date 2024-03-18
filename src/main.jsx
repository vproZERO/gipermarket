import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Aos from "aos";
import { client } from "./config/query-client.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'
import "aos/dist/aos.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root"), Aos.init()).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <ToastContainer position="bottom right" />
    </BrowserRouter>
  </QueryClientProvider>
);
