import React, { useState } from "react";
import "../style.css";
import { RightOutlined } from "@ant-design/icons";

function Portada() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 3); // 3 es el número total de imágenes en el carrusel
  };
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + 3) % 3); // 3 es el número total de imágenes en el carrusel
  };

  const images = [
    {
      title: "Alquiler y venta de apartamentos y casas en Uruguay",
      src: "../../Images/casa.png",
    },
    {
      title: "Tu casa a estrenar",
      src: "../../Images/livingAdministrar.webp",
    },
    {
      title: "Te ayudamos a buscar el hogar perfecto para vos",
      src: "../../Images/portada.jpg",
    },
  ];

  return (
    <div className="portada">
      <div className="opacidad">
        {images.map((image, index) => (
          <div
            className="contenedorPortada"
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }} //Si el indice de la imagen actual coincide con el almacenado se muestra
          >
            <h1 className="textoPortada">{image.title}</h1>
            <img src={image.src} alt="" className="fotoPortada" />
            <RightOutlined
              className="flechaSiguiente"
              onClick={handleNextClick}
            />
            <RightOutlined
              className="flechaAnterior"
              onClick={handlePrevClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portada;
