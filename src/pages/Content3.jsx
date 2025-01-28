import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import animation from "./Animation-Registro.json";
import SingleStepService from "../components/SingleStepService";
import SinglePlatformBoxService from "../components/SinglePlatformBoxService";
import SingleStepServicePopup from "../components/SingleStepServicePopup";

const Content3  = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [stepNumber, setStepNumber] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);  
  const contactsShipsta = ["hr@shipsta.com", "hola@shipsta.com", "+ 352 278 631 80"];
  const contactsISM = ["p2p-precalificacion@holcim.com"];
  const contactsJaggaer = ["info.proveedoresmexico@holcim.com"];
  const contactsSICOP = ["holcim.mexico@sicop.com.ar", "s.solanorivera@holcim.com"];
  const contactsDirecta = ["info.proveedoresmexico@holcim.com"];

  const openPopupHandler = (numero) => {
    setStepNumber(numero);  
    setScrollPosition(window.pageYOffset);  
    setOpenPopup(true); 
  };

  const closePopupHandler = () => {
    setOpenPopup(false); 
  };

  useEffect(() => {
    if (openPopup) {
      document.body.style.overflow = "hidden"; 
      window.scrollTo(0, scrollPosition);  
    } else {
      document.body.style.overflow = "auto";  
    }

    return () => {
      document.body.style.overflow = "auto";  
    };
  }, [openPopup, scrollPosition]);

  return (
  <div>
    <div className="steps-section">
      <div className="sub-box">
        <h6>
          Si aún no eres un proveedor registrado de Holcim y deseas serlo, sigue
          los siguientes pasos de nuestro Proceso de alta:
        </h6>

        <div className="container">
          <div className="gif-wrapper">
            <Lottie
              animationData={animation}
              loop={true}
              style={{ width: "390px", height: "390px" }}
            />
          </div>
          <div className="steps-wrapper">
            <SingleStepService
              numero={1}
              titulo="Prevaloración"
              texto="Completa nuestro Formulario de Prevaloración de Proveedores"
              boton="Ir al formulario"
              icono={true}
              href="https://forms.gle/qqYPX2NyRZzB4KWv7"
            />
            <SingleStepService
              numero={2}
              titulo="Alta proveedor"
              texto="Prepara los documentos necesarios para iniciar tu proceso de alta"
              boton="Ver la lista de documentos"
              showPopup={true}  
              openPopupHandler={() => openPopupHandler(2)} 
            />
            <SingleStepService
              numero={3}
              titulo="Precalificación (ISM)"
              texto="Completa los cuestionarios de precalificación sobre la gestión de tu empresa"
              boton="Ir al cuestionario"
              icono={true}
              href="https://vendormaster.holcimvmp.com/login"
            />
            <SingleStepService
              numero={4}
              titulo="Supplier Relationship Management"
              texto="Accede a material de capacitación sobre nuestra plataforma SRM"
              boton="Manuales y Capacitaciones"
              showPopup={true}  
              openPopupHandler={() => openPopupHandler(4)} 
            />
          </div>
        </div>
      </div>
    </div>

    <div className="platforms-section">
      <div className="section-text">
        <div className="tittle">Plataformas y herramientas</div>
        <div className="text">
          Accede a las aplicaciones disponibles para ti
        </div>
      </div>
      <div className="platforms-boxes">
        <SinglePlatformBoxService
          tittle="ISM"
          text="Plataforma de ingreso para nuevos proveedores"
          buttonText="Ir a ISM"
          img="/assets/platforms-icons/Plataformas-ISM.png"
          imgAlt="ISM Logo"
          href="https://vendormaster.holcimvmp.com/login"
          contacts={contactsISM}
        />
        <SinglePlatformBoxService
          tittle="ICOUNSEL"
          text="Herramienta para el seguimiento a contratos mercantiles"
          buttonText="Ir a ICOUNSEL"
          img="/assets/platforms-icons/Plataformas-GenericHolcim.png"
          imgAlt="ICOUNSEL Logo"
          href="https://holcim.iwebjbs.com/"
        />
        <SinglePlatformBoxService
          tittle="SICOP"
          text="Herramienta utilizada para el acceso y control de la directive de contratistas a centros de trabajo"
          buttonText="Ir a SICOP"
          img="/assets/platforms-icons/Plataformas-SICOP.png"
          imgAlt="SICOP Logo"
          href="https://www.sicop.com.ar/mexico"
          contacts={contactsSICOP}
        />
        <SinglePlatformBoxService
          tittle="JAGGAER"
          text="Portal a través del cual se realizan subastas para equipos"
          buttonText="Ir a JAGGAER"
          img="/assets/platforms-icons/Plataformas-Jaggaer.png"
          imgAlt="JAGGAER Logo"
          href="https://lafargeholcim.bravosolution.com/"
          contacts={contactsJaggaer}
        />
      </div>
    </div>

    <div className="sostenibility-section">
      <div className="top-part">
        <div className="title">Beneficios por Sostenibilidad</div>
        <div className="text">
          Invitamos a nuestros proveedores a unirse a nuestra misión de crear un
          futuro más sostenible, explorando las oportunidades de colaboración y
          los incentivos disponibles.
        </div>
      </div>
      <div className="down-part">
        <div className="content">
          <div className="text">
            Con CrediProveedores obtienes las mejores condiciones de
            descuento,&nbsp;
            <strong>
              si en tu precalificación quedas como proveedor sostenible bajo el
              estándar Holcim,&nbsp;
            </strong>
            obtendrás los siguientes beneficios:
          </div>
          <div className="icons-container">
            <div className="single-icon">
              <div className="icon">
                <img src="/assets/icons/Icon-Liquidez.svg" alt="" />
              </div>
              <div className="text">
                <strong>Liquidez inmediata</strong> <br />
                Recibe tu pago de manera rápida y sin esperas
              </div>
            </div>
            <div className="single-icon">
              <div className="icon">
                <img src="/assets/icons/Icon-Cobro.svg" alt="" />
              </div>
              <div className="text">
                <strong>Certeza de cobro</strong> <br />
                Garantiza el pago puntual y seguro de tus servicios
              </div>
            </div>
            <div className="single-icon">
              <div className="icon">
                <img src="/assets/icons/Icon-Papeleo.svg" alt="" />
              </div>
              <div className="text">
                <strong>Menos papeleo</strong> <br />
                No requiere información financiera ni estudio de crédito
              </div>
            </div>
            <div className="single-icon">
              <div className="icon">
                <img src="/assets/icons/Icon-Deudas.svg" alt="" />
              </div>
              <div className="text">
                <strong>Evita deudas</strong> <br />
                No se registrarán pasivos financieros
              </div>
            </div>
            <div className="single-icon">
              <div className="icon">
                <img src="/assets/icons/Icon-Factoraje.svg" alt="" />
              </div>
              <div className="text">
                <strong>Factoraje eficiente</strong> <br />
                Anticipa fácil, en línea, cuando tú quieras
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SingleStepServicePopup
        open={openPopup}
        closePopup={closePopupHandler}
        stepNumber={stepNumber}
      />
    </div>
  );
};
export default Content3;
