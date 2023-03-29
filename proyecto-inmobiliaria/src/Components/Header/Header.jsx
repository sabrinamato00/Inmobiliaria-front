import React from "react";
import { Link } from "react-router-dom";
import "./styleHeader.css";
<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
  rel="stylesheet"
></link>;

function Header() {
  return (
    <div className="header">
      <div className="Logo">
        <img src="/Images/juanitaHeader.png" alt="Logo" />
      </div>
      <h1 className="tituloHeader">JUANITA PROPIEDADES</h1>
      <nav>
        <ul className="navHeader">
          <Link to={"/home"}>
            <li>
              <a href="#">Inicio</a>
            </li>
          </Link>
          <li>
            <a href="#">Empresa</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Estudio</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <Link to={"/administrador"}>
            <li>
              <a href="#">Administrar</a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
