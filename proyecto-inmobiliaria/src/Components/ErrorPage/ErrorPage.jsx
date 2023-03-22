import React from "react";
import { useRouteError } from "react-router-dom";
import "./error.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="contenedorError">
      <div className="errorPage">
        <h1>Oops!</h1>
        <p>Lo sentimos, error inesperado.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/home"}>
          <h3>Pagina principal</h3>
        </Link>
      </div>
      <img src="/Images/error.jpg" alt="" className="casaError" />
    </div>
  );
}

export default ErrorPage;
