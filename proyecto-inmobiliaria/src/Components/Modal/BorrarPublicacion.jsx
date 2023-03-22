import React, { useEffect, useState } from "react";
import "./styleModal.css";
import { DeleteOutlined } from "@ant-design/icons";
import ModalBorrar from "./ModalBorrar";
import { propiedades } from "../../API/Rule_inmobiliaria";

function BorrarPublicacion(props) {
  const [propiedadBorrar, setPropiedadBorrar] = useState({});

  const [modalBorrar, setModalBorrar] = useState(false);

  const openModalBorrar = (propiedades) => {
    setPropiedadBorrar(propiedades);
    setModalBorrar(!modalBorrar);
    console.log(modalBorrar);
  };

  const [arrayPropiedades, setArrayPropiedades] = useState([]);
  const getPropiedades = async () => {
    await propiedades().then((response) => {
      setArrayPropiedades(response);
    });
  };
  useEffect(() => {
    getPropiedades();
  }, []);
  return (
    <div>
      <div className="contenedorBorrarPubli">
        <div className="borrarPubli">
          <h3 onClick={props.cerrarBorrarPubli} className="cerrarModal">
            X
          </h3>
          {arrayPropiedades.map((propiedades) => {
            return (
              <div className="contenedorCardAdmin">
                <DeleteOutlined
                  className="editarAdmin"
                  onClick={() => openModalBorrar(propiedades)}
                />
                <div className="cardAdmin">
                  <label className="operacionAdmin">
                    {propiedades.operacion}
                  </label>
                  <img
                    src={propiedades.foto}
                    alt=""
                    className="fotoPropiedadAdm"
                  />
                  <div className="infoCardAdmin">
                    <p className="tipo">{propiedades.tipo_inmueble}</p>
                    <p className="departamento">{propiedades.departamento}</p>
                    <p className="barrio">{propiedades.barrio}</p>
                    <p className="dormitorios">
                      Dormitorios: {propiedades.dormitorios}
                    </p>
                    <p className="precio">U$S {propiedades.precio}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            );
          })}
          {modalBorrar && (
            <ModalBorrar
              cerrarModalBorrar={openModalBorrar}
              cerrarBorrarPubli={props.cerrarBorrarPubli}
              propiedad={propiedadBorrar}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BorrarPublicacion;
