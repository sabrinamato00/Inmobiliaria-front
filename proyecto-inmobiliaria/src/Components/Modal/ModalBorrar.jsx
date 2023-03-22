import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteProp } from "../../API/Rule_inmobiliaria";
import "./styleModal.css";

function ModalBorrar(props) {
  const id = props.propiedad.id;
  const cerrar = props.cerrarModalBorrar;
  const borrarProp = async () => {
    await deleteProp(id)
      .then(() => {
        alert("Propiedad eliminada correctamente");
        props.cerrarModalBorrar();
        props.cerrarBorrarPubli();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="contenedorModalBorrar">
      <div className="modalBorrar">
        <h4> Desea eliminar la publicacion? </h4>
        <br />
        <div className="buttonBorrar">
          <button className="btnBorrarPubli" onClick={borrarProp}>
            SI
          </button>
          <button className="btnBorrarPubli" onClick={props.cerrarModalBorrar}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalBorrar;
