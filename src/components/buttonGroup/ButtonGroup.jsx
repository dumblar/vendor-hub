import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonService from "../ButtonService";
import "./ButtonGroup.css";

const ButtonGroup = () => {
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // Estado para el botón activo

  /*------------------Botones de ejemplo------------------*/
  const btnServices = [
    {
      icono: "Icon3D-ServiciosDeTerceros.png",
      titulo: "Servicios de terceros",
      texto: "Servicios generales, facilities y servicios corporativos",
      ruta: "/Content1",
    },
    {
      icono: "Icon3D-Logistica.png",
      titulo: "Logística",
      texto: "Servicio de transporte y servicios logísticos",
      ruta: "/Content2",
    },
    {
      icono: "Icon3D-Energia.png",
      titulo: "Energía",
      texto: "Combustibles y energía para los centros de trabajo",
      ruta: "/Content3",
    },
    {
      icono: "Icon3D-Mineria.png",
      titulo: "Minería",
      texto: "Extracción, Perforación, Transporte de materiales. etc.",
      ruta: "/Content4",
    },
    {
      icono: "Icon3D-MateriasPrimas.png",
      titulo: "Materias Primas",
      texto: "Materiales necesarios para la producción de nuestros productos",
      ruta: "/Content5",
    },
    {
      icono: "Icon3D-EquiposYConsumibles.png",
      titulo: "Equipos y consumibles",
      texto:
        "Compra de maquinaria. equipos en planta, refacciones de equipos...",
      ruta: "/Content6",
    },
  ];

  const handleButtonClick = (index) => {
    setLoading(true);
    setActiveButton(index); // Cambia el botón activo
    setTimeout(() => {
      setLoading(false); // Cerrar la pantalla de carga después de 1 segundo
    }, 500);
  };

  return (
    <div
      className="button-group"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/MainBanner-Background.jpg"
        })`,
      }}
    >
      {loading && (
        <div className="loading-screen">
          <img src="/unnamed.gif" alt="Cargando..." />
        </div>
      )}

      <div className="blackCurtain"></div>

      <div className="content">
        <h3 className="tittle">
          Es un placer darte la bienvenida a nuestro Portal de integración
        </h3>
        <h6 className="paragraph">
          Este es un lugar diseñado para proveedores actuales y futuros que
          estén interesados en trabajar con nosotros. <br />
          <strong>
            Para continuar, por favor selecciona la categoría del servicio que
            ofreces:
          </strong>
        </h6>
        <div className="button-grid" style={{ textAlign: "center" }}>
          {btnServices.map((boton, index) => (
            <Link key={index} to={boton.ruta}>
              <ButtonService
                icono={boton.icono}
                titulo={boton.titulo}
                texto={boton.texto}
                onClick={() => handleButtonClick(index)} // Llamar a la función con el índice
                isActive={activeButton === index} // Pasa la propiedad isActive para el botón
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
