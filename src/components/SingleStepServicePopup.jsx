import React from 'react';

const SingleStepServicePopup = ({ open, closePopup, stepNumber }) => {
  if (!open) return null;

  const getPopupContent = (stepNumber) => {
    if (stepNumber === 2) {
      return {
        titles: ["Documentos necesarios para iniciar tu proceso de alta como proveedor:"],
        paragraphs: [
          [
            "Registro Federal de Contribuyentes (RFC)",
            "Estado de cuenta no mayor a 3 meses",
            "Formato de Código de conducta diligenciado",
            "Formato de Conflicto de interés diligenciado"
          ]
        ],
        icons: ["/assets/icons/clipboard-document-check.svg"],
        footer: (
          <span>
            En cuanto tengas listos estos documentos, dirígete a la{" "}
            <a
              href="https://vendormaster.holcimvmp.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              plataforma ISM
            </a>{" "}
            para cargarlos y seguir con el paso 3.
            El comprador que hizo el contacto debera solicitar el alta en la plataforma.
          </span>
        ),
      };
    } else if (stepNumber === 4) {
      return {
        titles: ["Manuales", "Capacitaciones"],
        paragraphs: [
          [
            <a href="http://example.com/token" className="link-style">Generación de tóken</a>,
            <a href="http://example.com/manual" className="link-style">Manual DirectA MX</a>,
            <a href="http://example.com/clave-acceso" className="link-style">Modificación de Clave de acceso (Contraseña)</a>,
            <a href="http://example.com/restablecer" className="link-style">Restablecimiento de Contraseña</a>,
            <a href="http://example.com/manual-srm" className="link-style">Manual de uso plataforma SRM</a>
          ],
          [
            <a href="https://www.youtube.com/watch?v=qLAiDoCsEec&t=4s" className="link-style">Registro Federal de Contribuyentes (RFC)</a>,
            <a href="https://www.youtube.com/watch?v=5K7nhY25Xr0" className="link-style">Estado de cuenta no mayor a 3 meses</a>,
            <a href="https://www.youtube.com/watch?v=WuTU4hSKba4" className="link-style">Formato de Código de conducta diligenciado</a>,
            <a href="https://www.youtube.com/watch?v=Obmf3JTfe5o" className="link-style">Formato de Conflicto de interés diligenciado</a>
          ]
        ],
        icons: [
          "/assets/icons/clipboard-document-check.svg",
          "/assets/icons/video-camera.svg"
        ],
      };
    }
    return {};
  };

  const { titles, paragraphs, icons, footer } = getPopupContent(stepNumber);

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img
          src="/assets/icons/iconClosed.svg"
          alt="Cerrar"
          className="close-btn"
          onClick={closePopup}
        />
        <div>
          {titles && titles.length > 0 && paragraphs && paragraphs.length > 0 ? (
            <div className="popup-content-body">
              {titles.map((title, index) => (
                <div key={index} className="popup-section">
                  <h2 className="popup-title">{title}</h2>
                  {paragraphs[index] && Array.isArray(paragraphs[index]) ? (
                    paragraphs[index].map((paragraph, paraIndex) => (
                      <p key={paraIndex} className="popup-paragraph">
                        {icons && icons.length > index ? (
                          <img
                            src={icons[index]}
                            className="icon-paragraph"
                            alt={`Icono del título ${index + 1}`}
                          />
                        ) : (
                          <span>No se encontró el icono</span>
                        )}
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="popup-paragraph">{paragraphs[index]}</p>
                  )}
                </div>
              ))}
            </div>
          ) : null}
          {footer && (
            <div className="popup-footer">
              <p>{footer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleStepServicePopup;
