import React, { useState } from "react";
import { Link } from "react-router-dom";
import VerPublicaciones from "../Modal/VerPublicaciones";
import "../style.css";
import {
  HomeOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import AgregarPubli from "../Modal/AgregarPubli";
import BorrarPublicacion from "../Modal/BorrarPublicacion";
import ModificarPublicacion from "../Modal/ModificarPublicacion";

function Administrar() {
  const [verPublicacionesOpen, setVerPublicacionesOpen] = useState(false);
  const openVerPubli = () => {
    setVerPublicacionesOpen(!verPublicacionesOpen);
  };

  const [agregarPublicacion, setAgregarPublicacion] = useState(false);
  const openAgregarPubli = () => {
    setAgregarPublicacion(!agregarPublicacion);
  };
  const [borrarPublicacion, setBorrarPublicacion] = useState(false);
  const openBorrarPublicacion = () => {
    setBorrarPublicacion(!borrarPublicacion);
  };
  const [modificarPublicacion, setModificarPublicacion] = useState(false);
  const openModificarPublicacion = () => {
    setModificarPublicacion(!modificarPublicacion);
  };

  return (
    <div className="bgAdmin">
      <div className="administrar">
        <Link to={"/home"} className="cerrarAdministrar">
          <h3>X</h3>
        </Link>
        <ul className="navAdministrar">
          <li onClick={openAgregarPubli}>
            <HomeOutlined className="iconoMenuAdmin" />
            <h3 className="mas">+</h3>
            <a href="#">Nueva publicación</a>
          </li>
          <li onClick={openBorrarPublicacion}>
            <DeleteOutlined className="iconoMenuAdmin" />
            <a href="#">Borrar publicación</a>
          </li>
          <li onClick={openModificarPublicacion}>
            <EditOutlined className="iconoMenuAdmin" />
            <a href="#">Modificar publicación</a>
          </li>
          <li onClick={openVerPubli}>
            <SearchOutlined className="iconoMenuAdmin" />
            <a href="#">Ver publicaciones</a>
          </li>
          <Link to={"/"}>
            <li>
              <LogoutOutlined className="iconoMenuAdmin" />
              <a href="#">Cerrar sesion</a>
            </li>
          </Link>
        </ul>
        {verPublicacionesOpen && (
          <VerPublicaciones cerrarVerPubli={openVerPubli} />
        )}
        {agregarPublicacion && (
          <AgregarPubli cerrarAgregarPubli={openAgregarPubli} />
        )}
        {borrarPublicacion && (
          <BorrarPublicacion cerrarBorrarPubli={openBorrarPublicacion} />
        )}
        {modificarPublicacion && (
          <ModificarPublicacion
            cerrarModificarPubli={openModificarPublicacion}
          />
        )}
      </div>
    </div>
  );
}

export default Administrar;
