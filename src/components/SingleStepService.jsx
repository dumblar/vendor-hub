import React from "react";

const SingleStepService = ({ numero, titulo, texto, boton, icono, openPopupHandler, showPopup, href }) => {
  return (
    <div className="single-step">
      <div className="numbers-wrapper">
        <h2>{numero}.</h2>
      </div>
      <div className="text-wrapper">
        <h6>{titulo}</h6>
        <p>{texto}</p>
        {showPopup ? (
          <button onClick={openPopupHandler}>
            {boton}
            {icono && <img className="icon" src="/assets/icons/arrowLink.svg" alt="Icono" />}
          </button>
        ) : (
          <a href={href} className="button-link">
            <button>
              <div className="button-text">{boton}</div>
              {icono && <img className="icon" src="/assets/icons/arrowLink.svg" alt="Icono" />}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleStepService;


