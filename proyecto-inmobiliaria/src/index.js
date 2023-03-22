import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home/Home";
// import Administrar from "./components/Administrar/Administrar";
// import Detalle from "./components/DetallePropiedad/Detalle";
import LoginComp from "./Components/Login/Login";
import Register from "./Components/Register/Register";
// import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComp />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   path: "/administrador",
  //   element: <Administrar />,
  // },
  // {
  //   path: "/home/propiedad/:id",
  //   element: <Detalle />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
