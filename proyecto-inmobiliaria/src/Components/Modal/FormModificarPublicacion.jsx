import React, { useState } from "react";
import { modify } from "../../API/Rule_inmobiliaria";
import "./styleModal.css";

function FormModificarPublicacion(props) {
  const [operacion, setOperacion] = useState(props.propiedad.operacion);
  const [tipo_inmueble, setTipo_inmueble] = useState(
    props.propiedad.tipo_inmueble
  );
  const [departamento, setDepartamento] = useState(
    props.propiedad.departamento
  );
  const [barrio, setBarrio] = useState(props.propiedad.barrio);
  const [precio, setPrecio] = useState(props.propiedad.precio);
  const [dormitorios, setDormitorios] = useState(props.propiedad.dormitorios);
  const [baños, setBaños] = useState(props.propiedad.baños);
  const [metros_terreno, setMetros_terreno] = useState(
    props.propiedad.metros_terreno
  );
  const [metros_edificio, setMetros_edificio] = useState(
    props.propiedad.metros_edificio
  );
  const [descripcion, setDescripcion] = useState(props.propiedad.descripcion);

  const handleSubmit = async () => {
    const result = {
      operacion: operacion,
      tipo_inmueble: tipo_inmueble,
      departamento: departamento,
      barrio: barrio,
      precio: precio,
      dormitorios: dormitorios,
      baños: baños,
      metros_terreno: metros_terreno,
      metros_edificio: metros_edificio,
      descripcion: descripcion,
    };

    const id = props.propiedad.id;
    await modify(result, id)
      .then(() => {
        alert("Publicación modificada");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="contenedorFormModificar">
      <h3 onClick={props.cerrarFormModificar} className="cerrarFormModificar">
        X
      </h3>

      <div className="contModificar">
        <form action="" className="formModificar" onSubmit={handleSubmit}>
          <select
            value={operacion}
            name="operacion"
            className="operacionModificar"
            onChange={(e) => setOperacion(e.target.value)}
          >
            <option value="" selected>
              Operacion
            </option>
            <option value="Alquila">Alquila</option>
            <option value="Venta">Venta</option>
          </select>
          <label>
            Tipo de inmueble: <br />
            <input
              name="tipo_inmueble"
              type="text"
              placeholder={props.propiedad.tipo_inmueble}
              value={tipo_inmueble}
              onChange={(e) => setTipo_inmueble(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Departamento: <br />
            <input
              name="departamento"
              type="text"
              value={departamento}
              placeholder={props.propiedad.departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Barrio: <br />
            <input
              name="barrio"
              type="text"
              value={barrio}
              placeholder={props.propiedad.barrio}
              onChange={(e) => setBarrio(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Precio: <br />
            <input
              name="precio"
              type="number"
              value={precio}
              placeholder={props.propiedad.precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Dormitorios: <br />
            <input
              name="dormitorios"
              type="number"
              value={dormitorios}
              placeholder={props.propiedad.dormitorios}
              onChange={(e) => setDormitorios(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Baños: <br />
            <input
              name="baños"
              type="number"
              value={baños}
              placeholder={props.propiedad.baños}
              onChange={(e) => setBaños(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Metros del terreno: <br />
            <input
              name="metros_terreno"
              type="number"
              value={metros_terreno}
              placeholder={props.propiedad.metros_terreno}
              onChange={(e) => setMetros_terreno(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label>
            Metros del edificio: <br />
            <input
              name="metros_edificio"
              type="number"
              value={metros_edificio}
              placeholder={props.propiedad.metros_edificio}
              onChange={(e) => setMetros_edificio(e.target.value)}
              className="imputFormModificar"
            />
          </label>
          <label className="imputFormModificarDescrip">
            Descripcion: <br />
            <input
              name="descripcion"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </label>
          <button className="submitModificar" type="submit">
            Agregar cambios
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormModificarPublicacion;
