import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import "./styleBuscador.css";

function Buscador(props) {
  const [operacion, setOperacion] = useState(null);
  const [departamento, setDepartamento] = useState(null);
  const [tipoInmueble, setTipoInmueble] = useState(null);
  const [dormitorios, setDormitorios] = useState(null);

  return (
    <>
      <div className="lineaSup"></div>
      <div className="searchBar">
        <select
          name="operacion"
          className="selectSearchBar"
          onChange={(e) => setOperacion(e.target.value)}
        >
          <option value="" selected>
            Operacion
          </option>
          <option value="Alquila">Alquila</option>
          <option value="Venta">Venta</option>
          <option value="alquilerVenta">Alquiler y Venta</option>
        </select>

        <select
          name="departamento"
          className="departamento"
          onChange={(e) => setDepartamento(e.target.value)}
        >
          <option value="" selected>
            Departamento
          </option>
          <option value="Montevideo">Montevideo</option>
          <option value="Canelones">Canelones</option>
          <option value="Maldonado">Maldonado</option>
        </select>

        <select
          name="inmueble"
          className="inmueble"
          onChange={(e) => setTipoInmueble(e.target.value)}
        >
          <option value="" selected>
            Tipo de inmueble
          </option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Terreno">Terrenos</option>
        </select>

        <select
          name="dormitorios"
          className="dormitorios"
          onChange={(e) => setDormitorios(e.target.value)}
        >
          <option value="" selected>
            Dormitorios
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="mas5">+5</option>
        </select>
        <SearchOutlined
          className="buscar"
          onClick={() => {
            props.setFiltro({
              operacion: operacion || null,
              departamento: departamento || null,
              tipo_inmueble: tipoInmueble || null,
              dormitorios: dormitorios || null,
            });
          }}
        />
      </div>
    </>
  );
}

export default Buscador;
