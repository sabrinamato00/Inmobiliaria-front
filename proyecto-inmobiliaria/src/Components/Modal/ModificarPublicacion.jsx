import React, { useEffect, useState } from "react";
import { propiedades } from "../../API/Rule_inmobiliaria";
import "./styleModal.css";
import { EditOutlined } from "@ant-design/icons";
import FormModificarPublicacion from "./FormModificarPublicacion";

function ModificarPublicacion(props) {
  const [propiedadModificar, setPropiedadModificar] = useState({});

  const [formModificar, setFormModificar] = useState(false);

  const openFormModificar = (propiedades) => {
    setPropiedadModificar(propiedades);
    setFormModificar(!formModificar);
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
    <div className="contenedorModificarPubli">
      <div className="modificarPubli">
        <h3 onClick={props.cerrarModificarPubli} className="cerrarModal">
          X
        </h3>
        {arrayPropiedades.map((propiedades) => {
          return (
            <div className="contenedorCardAdmin">
              <EditOutlined
                className="editarAdmin"
                onClick={() => openFormModificar(propiedades)}
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
        {formModificar && (
          <FormModificarPublicacion
            cerrarFormModificar={openFormModificar}
            propiedad={propiedadModificar}
          />
        )}
      </div>
    </div>
  );
}

export default ModificarPublicacion;
