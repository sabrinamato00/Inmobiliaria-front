import React, { useEffect, useState } from "react";
import { propiedades } from "../../API/Rule_inmobiliaria";
import "../style.css";
import { Link } from "react-router-dom";
import Detalle from "../DetallePropiedad/Detalle";

function List(props) {
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState({});

  const [detalleOpen, setDetalleOpen] = useState(false);

  const openDetalle = (propiedad) => {
    setDetalleOpen(!detalleOpen);
    setPropiedadSeleccionada(propiedad);
  };

  return (
    <div className="list">
      {props.propiedades.map((propiedad) => {
        return (
          <div key={propiedad.id}>
            <Link to={`/home/propiedad/${propiedad.id}`}>
              <label className="operacion">{propiedad.operacion}</label>
              <div className="card">
                <img src={propiedad.foto} alt="" className="fotoPropiedad" />
                <div className="infoCard">
                  <p className="tipo">{propiedad.tipo_inmueble}</p>
                  <p className="departamento">{propiedad.departamento}</p>
                  <p className="barrio">{propiedad.barrio}</p>
                  <p className="dormitorios">
                    Dormitorios: {propiedad.dormitorios}
                  </p>
                  <p className="precio">U$S {propiedad.precio}</p>
                  <p></p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}

      {detalleOpen && (
        <Detalle
          cerraDetalle={openDetalle}
          propiedad={propiedadSeleccionada}
          cerrarDetalle={openDetalle}
        />
      )}
    </div>
  );
}

export default List;
