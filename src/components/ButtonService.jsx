import React from "react";

const ButtonService = ({ icono, titulo, texto, onClick, isActive }) => {
  return (
    <button
      className={`button-service ${isActive ? "active" : ""}`} // Aplica la clase 'active' si el botón está activo
      onClick={onClick}
      title={titulo}
    >
      <span className="icono">
        <img src={`/assets/icons/${icono}`} alt={titulo} />
      </span>
      <div className="contenido">
        <span className="titulo">{titulo}</span>
        <span className="texto">{texto}</span> 
      </div>
    </button>
  );
};

export default ButtonService;
