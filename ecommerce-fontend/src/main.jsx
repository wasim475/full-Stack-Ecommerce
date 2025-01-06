import { StrictMode } from "react";
import { ToastContainer } from 'react-toastify';
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import MainRoute from './Routes/MainRoute.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
    <ToastContainer/>
  </StrictMode>
);
