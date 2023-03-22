import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Portada from "../Portada/Portada";
import Buscador from "../Search/Buscador";
import Header from "../Header/Header";
import { filtrarPropiedades, propiedades } from "../../API/Rule_inmobiliaria";

function Home() {
  const [arrayPropiedades, setArrayPropiedades] = useState([]);

  const [filtro, setFiltro] = useState(
    null /*{
    /*operacion: null,
    departamento: null,
    tipoInmueble: null,
    dormitorios: null,
  }*/
  );
  console.log("es un filtro ", filtro);

  const getPropiedades = async () => {
    await propiedades().then((response) => {
      setArrayPropiedades(response);
    });
  };
  useEffect(() => {
    getPropiedades();
    console.log(arrayPropiedades);
  }, []);

  const filterProp = async (filtro) => {
    console.log("es un filtro 2 ", filtro);
    await filtrarPropiedades(filtro).then((data) => {
      setArrayPropiedades(data);
    });
  };

  return (
    <div>
      <Header />
      <Portada />
      <div className="bgImage">
        <Buscador setFiltro={filterProp} />
        <div className="scrol">
          <List propiedades={arrayPropiedades} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
