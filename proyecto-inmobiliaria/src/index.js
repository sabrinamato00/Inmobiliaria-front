import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginComp from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Administrar from "./Components/Administrar/Administrar";
import Detalle from "./Components/DetallePropiedad/Detalle";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/administrador",
    element: <Administrar />,
  },
  {
    path: "/home/propiedad/:id",
    element: <Detalle />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
