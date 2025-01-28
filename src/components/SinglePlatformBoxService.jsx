import React, { useState } from "react";

const SinglePlatformBoxService = ({
  tittle,
  text,
  buttonText,
  img,
  imgAlt,
  href,
  contacts = [], 
}) => {
  const [isManualsOpen, setIsManualsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  const toggleManuals = () => {
    setIsManualsOpen(!isManualsOpen);
    setIsContactsOpen(false); // Asegurarse de cerrar "Contactos"
  };

  const toggleContacts = () => {
    if (contacts.length > 0) {
      // Solo abrir si hay contactos
      setIsContactsOpen(!isContactsOpen);
      setIsManualsOpen(false); // Asegurarse de cerrar "Manuales"
    }
  };

  return (
    <div className="single-box">
      <div className="up-part">
        <div className="img-container">
          <img src={img} alt={imgAlt} />
        </div>
        <div className="section-text">
          <div className="tittle">{tittle}</div>
          <div className="text">{text}</div>
        </div>
      </div>

      <div className="down-part">
        <a href={href} className="button-link">
          <button>
            <div className="button-text">{buttonText}</div>
            <img className="icon" src="/assets/icons/arrowLink.svg" alt="Icono" />
          </button>
        </a>
        <div className="options-container">
          {/* Manuales */}
          <div className="option-wrapper">
            <div className="option" onClick={toggleManuals}>
              <div className="text">Manuales</div>
              <span className={`arrow ${isManualsOpen ? "open" : ""}`}></span>
            </div>
            {isManualsOpen && (
              <div className="dropdown">
                <a
                  href="/assets/manuals/Manual-Plataforma-SRM.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="dropdown-item">
                    <div className="text">Manual de Usuario</div>
                    <img src="/assets/icons/arrowLink.svg" alt="Icono" />
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Contactos */}
          <div className="option-wrapper">
            <div
              className={`option ${contacts.length === 0 ? "disabled" : ""}`}
              onClick={toggleContacts}
            >
              <div className="text">Contactos</div>
              <span
                className={`arrow ${
                  isContactsOpen && contacts.length > 0 ? "open" : ""
                }`}
              ></span>
            </div>
            {isContactsOpen && contacts.length > 0 && (
              <div className="dropdown">
                {contacts.map((contact, index) => (
                  <div className="dropdown-item" key={index}>
                    <div className="text">{contact}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlatformBoxService;
