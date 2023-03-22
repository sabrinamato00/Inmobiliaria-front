import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { propiedades } from "../../API/Rule_inmobiliaria";
import Header from "../Header/Header";
import "../style.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Modal() {
  const { id } = useParams();

  const [propiedad, setPropiedad] = useState([]);
  const [flag, setFlag] = useState(false);

  const getPropiedades = async () => {
    await propiedades().then((response) => {
      const propiedadFilter = response.filter(
        (propiedad) => propiedad.id == id
      );
      setPropiedad(propiedadFilter[0]);
    });
  };
  useEffect(() => {
    getPropiedades();
    // console.log(propiedad);
  }, [flag]);

  return (
    <div className="contenedorDetalle">
      <Header />
      <div className="detalle">
        <Link to={"/home"}>
          <div className="atrasDetalle">
            <div className="divAtras">
              <ArrowLeftOutlined /> <p> Atras</p>
            </div>
          </div>
        </Link>
        <div className="divFotoDetalle">
          <img src={propiedad?.foto} alt="" className="fotoDetalle" />
        </div>
        <div className="infoDerecha">
          <h3 className="precioDetalle">U$S {propiedad?.precio}</h3>
          <ul>
            <li> Tipo de operacion: {propiedad?.operacion}</li>
            <li>Tipo de inmueble: {propiedad?.tipo_inmueble}</li>
            <li>Departamento: {propiedad?.departamento}</li>
            <li>Barrio: {propiedad?.barrio}</li>
            <li>Dormitorios {propiedad?.dormitorios}</li>
            <li>Baños: {propiedad?.baños}</li>
            <li>Metraje del terreno: {propiedad?.metros_terreno}</li>
            <li>Metraje edificio: {propiedad?.metros_edificio}</li>
          </ul>
        </div>
        <div>
          <p className="descripcionDetalle">
            Descripcion: {propiedad?.descripcion}
          </p>
        </div>

        {/* <br />
        <div className="modalParrafo">
          <h3>Descripcion</h3>
          <p>{props.propiedad.descripcion}</p>
        </div>
        <div className="modalDetalle">
          <h3>Detalles</h3>
          <div className="containerDetalle">
            <label>Tipo Inmueble</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.TipoInmueble}
            ></input>
            <label>Departamento</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.departamento}
            ></input>
            <label>Barrio</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.barrio}
            ></input>
            <label>Precio</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.precio}
            ></input>
            <label>Dormitorios</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.dormitorios}
            ></input>
            <label>Baños</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.baño}
            ></input>
            <label>Metros Terreno</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.metrosTerreno}
            ></input>
            <label>Metros Edificio</label>
            <input
              type="range"
              min={0}
              max={100}
              className="inputPropiedades"
              step={1}
              value={props.propiedad.metrosEdificio}
            ></input>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Modal;
