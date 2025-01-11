import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import MainRoute from "./Routes/MainRoute.jsx";
import store from './store/store.js';
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </StrictMode>
);
