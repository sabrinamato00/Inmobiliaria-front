import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { propiedades } from "../../API/Rule_inmobiliaria";
import "./styleModal.css";

function VerPublicaciones(props) {
  const [arrayPropyedades, setArrayPropiedades] = useState([]);
  const [flag, setFlag] = useState(false);
  const getPropiedades = async () => {
    await propiedades().then((response) => {
      setArrayPropiedades(response);
    });
  };
  useEffect(() => {
    getPropiedades();
  }, [flag]);
  return (
    <div className="contenedorVerPubli">
      <div className="verPubli">
        <h3 onClick={props.cerrarVerPubli} className="cerrarModal">
          X
        </h3>
        {arrayPropyedades.map((propiedades) => {
          return (
            <div className="contenedorCardAdmin">
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
      </div>
    </div>
  );
}

export default VerPublicaciones;
