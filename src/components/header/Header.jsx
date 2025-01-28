import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "./Header.css";

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMobileMenu, setCurrentMobileMenu] = useState("main"); // Controla el menú activo

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setCurrentMobileMenu("main"); // Vuelve al menú principal al cerrar el menú
  };

  const openSubMenu = (menuName) => {
    setCurrentMobileMenu(menuName); // Cambia al submenú correspondiente
  };

  const goBackToMainMenu = (menuName) => {
    setCurrentMobileMenu(menuName);
  };

  useEffect(() => {
    // Añade o remueve la clase 'no-scroll' en el <body> al abrir/cerrar el menú
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileMenuOpen]);

  // State to control the visibility of the "Nosotros" menu-wrapper
  const [menuVisible, setMenuVisible] = useState(false);

  // State to control the visibility of the "Soluciones y Productos" menu-wrapper
  const [solutionsMenuVisible, setSolutionsMenuVisible] = useState(false);
  const [clientesMenuVisible, setClientesMenuVisible] = useState(false);
  const [sostenibilidadMenuVisible, setSostenibilidadMenuVisible] = useState(false);
  const [responsabilidadMenuVisible, setResponsabilidadMenuVisible] = useState(false);

  // State to control the height of rwd-menu
  const [menuHeight, setMenuHeight] = useState("auto");

  // State to store the previous height of rwd-menu
  const [prevMenuHeight, setPrevMenuHeight] = useState("auto");

  // Refs to track the "Nosotros" button, menu wrapper, and rwd-submenus
  const menuButtonRef = useRef(null);
  const menuButtonRef2 = useRef(null);
  const menuButtonRef3 = useRef(null);
  const menuButtonRef4 = useRef(null);
  const menuButtonRef5 = useRef(null);

  const menuWrapperRef = useRef(null);
  const solutionsMenuWrapperRef = useRef(null); // New ref for the "Soluciones y Productos" menu
  const ClientesWrapperRef = useRef(null); // New ref for the "Soluciones y Productos" menu
  const sostenibilidadWrapperRef = useRef(null); // New ref for the "Soluciones y Productos" menu
  const responsabilidadWrapperRef = useRef(null); // New ref for the "Soluciones y Productos" menu

  const submenuRef1 = useRef(null); // Ref for first submenu
  const submenuRef2 = useRef(null); // Ref for second submenu
  const submenuRef3 = useRef(null); // Ref for second submenu
  const submenuRef4 = useRef(null); // Ref for second submenu
  const submenuRef5 = useRef(null); // Ref for second submenu

  // Refs to track visibility state changes
  const menuVisibleRef = useRef(menuVisible);
  const solutionsMenuVisibleRef = useRef(solutionsMenuVisible);
  const clientesMenuVisibleRef = useRef(clientesMenuVisible);
  const sostenibilidadMenuVisibleRef = useRef(sostenibilidadMenuVisible);
  const responsabilidadMenuVisibleRef = useRef(responsabilidadMenuVisible);

  // Sync refs with the state changes
  useEffect(() => {
    menuVisibleRef.current = menuVisible;
  }, [menuVisible]);

  useEffect(() => {
    solutionsMenuVisibleRef.current = solutionsMenuVisible;
  }, [solutionsMenuVisible]);

  useEffect(() => {
    clientesMenuVisibleRef.current = clientesMenuVisible;
  }, [clientesMenuVisible]);

  useEffect(() => {
    sostenibilidadMenuVisibleRef.current = sostenibilidadMenuVisible;
  }, [sostenibilidadMenuVisible]);

  useEffect(() => {
    responsabilidadMenuVisibleRef.current = responsabilidadMenuVisible;
  }, [responsabilidadMenuVisible]);


  const handleMenuToggle = () => {
    // Store the current height before opening a menu
    setPrevMenuHeight(menuWrapperRef.current ? menuWrapperRef.current.scrollHeight : 0);
    setMenuVisible(!menuVisible);
  };

  // Handle the click on the "Soluciones y Productos" button to toggle its menu visibility
  const handleSolutionsMenuToggle = () => {
    // Store the current height before opening the solutions menu
    setPrevMenuHeight(solutionsMenuWrapperRef.current ? solutionsMenuWrapperRef.current.scrollHeight : 0);
    setSolutionsMenuVisible(!solutionsMenuVisible);
  };


  // Handle the click on the "Soluciones y Productos" button to toggle its menu visibility
  const handleClientesMenuToggle = () => {
    // Store the current height before opening the solutions menu
    setPrevMenuHeight(ClientesWrapperRef.current ? ClientesWrapperRef.current.scrollHeight : 0);
    setClientesMenuVisible(!clientesMenuVisible);
  };

  const handleSostenibilidadMenuToggle = () => {
    // Store the current height before opening the solutions menu
    setPrevMenuHeight(sostenibilidadMenuVisibleRef.current ? sostenibilidadMenuVisibleRef.current.scrollHeight : 0);
    setSostenibilidadMenuVisible(!clientesMenuVisible);
  };
  const handleResponsabilidadMenuToggle = () => {
    // Store the current height before opening the solutions menu
    setPrevMenuHeight(responsabilidadMenuVisibleRef.current ? responsabilidadMenuVisibleRef.current.scrollHeight : 0);
    setResponsabilidadMenuVisible(!clientesMenuVisible);
  };




  // Handle the click on any "item-menu master" button
  const handleItemMenuClick = (submenu) => {
    // Store the current height before opening a submenu
    setPrevMenuHeight(menuHeight);

    // Get the height of the selected submenu
    const submenuHeight = submenu.current ? submenu.current.scrollHeight : 0;
    setMenuHeight(submenuHeight); // Set the height of rwd-menu to the height of rwd-submenu
  };

  // Handle the click on the back button to reset the height
  const handleBackBtnClick = () => {
    setMenuHeight(prevMenuHeight); // Restore the previous height when going back
  };

  // Hide the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (menuVisibleRef.current || solutionsMenuVisibleRef.current || clientesMenuVisibleRef.current || sostenibilidadMenuVisibleRef.current || responsabilidadMenuVisibleRef.current) {

      // Check if the clicked target is outside the menu or button
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuVisible(false); // Hide the "Nosotros" menu
      }
      if (
        solutionsMenuWrapperRef.current &&
        !solutionsMenuWrapperRef.current.contains(event.target) &&
        !menuButtonRef2.current.contains(event.target)
      ) {
        setSolutionsMenuVisible(false); // Hide the "Soluciones y Productos" menu
      }

      if (
        ClientesWrapperRef.current &&
        !ClientesWrapperRef.current.contains(event.target) &&
        !menuButtonRef3.current.contains(event.target)
      ) {
        setClientesMenuVisible(false); // Hide the "Soluciones y Productos" menu
      }

      if (
        sostenibilidadWrapperRef.current &&
        !sostenibilidadWrapperRef.current.contains(event.target) &&
        !menuButtonRef4.current.contains(event.target)
      ) {
        setSostenibilidadMenuVisible(false); // Hide the "Soluciones y Productos" menu
      }

      if (
        responsabilidadWrapperRef.current &&
        !responsabilidadWrapperRef.current.contains(event.target) &&
        !menuButtonRef5.current.contains(event.target)
      ) {
        setResponsabilidadMenuVisible(false); // Hide the "Soluciones y Productos" menu
      }


    }
  };


  // Update menu position and handle clicks outside
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    var rwdMenu = $(".rwd-menu"),
      topMenu = $(".rwd-menu > li > a"),
      parentLi = $(".rwd-menu > li"),
      backBtn = $(".back-btn");

    topMenu.on("click", function (e) {
      var thisTopMenu = $(this).parent(); // current $this
      rwdMenu.addClass("rwd-menu-view");
      parentLi.removeClass("open-submenu");
      thisTopMenu.addClass("open-submenu");
    });

    backBtn.click(function () {
      var thisBackBtn = $(this);
      parentLi.removeClass();
      rwdMenu.removeClass("rwd-menu-view");
    });
  }, []);

  return (
    <header>
      <div className="holcim-header-desktop">
        <div className="container">
          <div className="row">
            <div className="site-logo-wrapper">
              <a href="https://www.holcim.com.mx/" aria-label="logo">
                <div className="logo">
                  <img src="/LogoHolcim.png" alt="Holcim Logo" />
                </div>
              </a>
              <div className="country">MÉXICO</div>
            </div>

            <div className="right-wrapper">
              <div className="top-header">
                <div className="top-links-wrapper">
                  <a href="https://www.holcim.com.mx/historias-latam">Historias Latam</a>
                  <a href="https://www.holcim.com.mx/cotizar">Cotizar</a>
                  <a href="https://www.holcim.com.mx/noticias">Prensa</a>
                  <a href="https://www.holcim.com.mx/carreras">Carreras</a>
                  <a href="https://www.holcim.com.mx/contacto">Contacto</a>
                </div>
              </div>
              <div className="down-header">
                <ul className="holcim-menu">
                  <li>
                    <a href="#" onClick={handleMenuToggle} ref={menuButtonRef}>Nosotros</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleSolutionsMenuToggle} ref={menuButtonRef2}>Soluciones y Productos</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClientesMenuToggle} ref={menuButtonRef3}>Clientes</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleSostenibilidadMenuToggle} ref={menuButtonRef4}>Sostenibilidad</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleResponsabilidadMenuToggle} ref={menuButtonRef5}>Responsabilidad Social</a>
                  </li>
                </ul>

                {/* Add a class to menu-wrapper based on menuVisible */}
                <div
                  ref={menuWrapperRef} // Attach the ref to the "Nosotros" menu wrapper
                  className={`menu-wrapper ${menuVisible ? "show-menu" : "hide-menu"}`}
                  style={{
                    position: "absolute",
                    top: menuButtonRef.current
                      ? menuButtonRef.current.getBoundingClientRect().bottom + window.scrollY + 43
                      : 0, // Dynamically calculate the position below the button
                    left: -80, // Position it under the "Nosotros" button
                    height: menuHeight, // Dynamically set the height of the menu
                    overflow: "hidden" // Hide overflow content
                  }}
                >
                  <ul className="rwd-menu">
                    <li>
                      <a href="#" className="main-menu">
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a href="#" className="item-menu master" onClick={() => handleItemMenuClick(submenuRef1)}>Quiénes Somos
                        <img className="icon" src="/assets/icons/arrow_right.svg" alt="Icono" />
                      </a>

                      <ul ref={submenuRef1} className="rwd-submenu">
                        <li>
                          <a href="#" className="back-btn item-menu" onClick={handleBackBtnClick}>
                            <img className="icon" src="/assets/icons/arrow_right.svg" style={{ transform: "rotate(180deg)" }} alt="Icono" /> Nosotros
                          </a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/linea-de-tiempo" className="item-menu">Historia (Línea de Tiempo)</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/donde-estamos" className="item-menu">¿Dónde Estamos?</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/holcim-en-cifras" className="item-menu">Holcim en Cifras</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/estructura-organizacional" className="item-menu">Estructura Organizacional</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/que-hacemos" className="item-menu">¿Qué Hacemos?</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="item-menu master" onClick={() => handleItemMenuClick(submenuRef2)}>Grupo Holcim
                        <img className="icon" src="/assets/icons/arrow_right.svg" alt="Icono" />
                      </a>
                      <ul ref={submenuRef2} className="rwd-submenu">
                        <li>
                          <a href="#" className="back-btn item-menu" onClick={handleBackBtnClick}>
                            <img className="icon" src="/assets/icons/arrow_right.svg" style={{ transform: "rotate(180deg)" }} alt="Icono" />  Grupo Holcim
                          </a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/presencia-mundial" className="item-menu">Presencia Mundial</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/ultimas-noticias-grupo-holcim" className="item-menu">Últimas Noticias Grupo Holcim</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/gobierno-coporativo" className="item-menu">Cumplimiento Etico (Compliance)</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/nuestra-vision-y-valores" className="item-menu">Nuestra Vision y Valores</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/contacto" className="item-menu">Contacto</a>
                    </li>
                  </ul>
                </div>

                {/* Add another menu-wrapper for "Soluciones y Productos" */}
                <div
                  ref={solutionsMenuWrapperRef}
                  className={`menu-wrapper ${solutionsMenuVisible ? "show-menu" : "hide-menu"}`}
                  style={{
                    position: "absolute",
                    top: menuButtonRef2.current
                      ? menuButtonRef2.current.getBoundingClientRect().bottom + window.scrollY + 43
                      : 0, // Dynamically calculate the position below the button
                    left: menuButtonRef2.current
                      ? menuButtonRef2.current.getBoundingClientRect().left - 550
                      : 0, // Position it under the "Soluciones y Productos" button
                    height: menuHeight, // Dynamically set the height of the menu
                  }}
                >
                  <ul className="rwd-menu">
                    <li>
                      <a href="#" className="main-menu">Soluciones y Productos</a>
                    </li>
                    <li>
                      <a href="#" className="item-menu master" onClick={() => handleItemMenuClick(submenuRef3)}>Soluciones Concretas
                        <img className="icon" src="/assets/icons/arrow_right.svg" alt="Icono" />
                      </a>

                      <ul ref={submenuRef3} className="rwd-submenu">
                        <li>
                          <a href="#" className="back-btn item-menu" onClick={handleBackBtnClick}>
                            <img className="icon" src="/assets/icons/arrow_right.svg" style={{ transform: "rotate(180deg)" }} alt="Icono" /> Soluciones Concretas
                          </a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/geocycle" className="item-menu">Geocycle</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/citec" className="item-menu">CiTeC</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/cemento" className="item-menu">Cemento</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/agregados" className="item-menu">Agregados</a>
                    </li>
                  </ul>
                </div>

                {/* Add another menu-wrapper for "Clientes" */}
                <div
                  ref={ClientesWrapperRef}
                  className={`menu-wrapper ${clientesMenuVisible ? "show-menu" : "hide-menu"}`}
                  style={{
                    position: "absolute",
                    top: menuButtonRef3.current
                      ? menuButtonRef3.current.getBoundingClientRect().bottom + window.scrollY + 43
                      : 0, // Dynamically calculate the position below the button
                    left: menuButtonRef3.current
                      ? menuButtonRef3.current.getBoundingClientRect().left - 300
                      : 0, // Position it under the "Soluciones y Productos" button
                    height: menuHeight, // Dynamically set the height of the menu
                  }}
                >
                  <ul className="rwd-menu">
                    <li>
                      <a href="#" className="main-menu">Clientes</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/disensa" className="item-menu">Disensa</a>
                    </li>
                    <li>
                      <a href="#" className="item-menu master" onClick={() => handleItemMenuClick(submenuRef4)}>Segmentos de Mercado
                        <img className="icon" src="/assets/icons/arrow_right.svg" alt="Icono" />
                      </a>

                      <ul ref={submenuRef4} className="rwd-submenu">
                        <li>
                          <a href="#" className="back-btn item-menu" onClick={handleBackBtnClick}>
                            <img className="icon" src="/assets/icons/arrow_right.svg" style={{ transform: "rotate(180deg)" }} alt="Icono" /> Soluciones Concretas
                          </a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/segmento-industrial" className="item-menu">Segmento Industrial</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/segmento-infraestructura" className="item-menu">Segmento Infraestructura</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/segmento-edificacion" className="item-menu">Segmento Edificación</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/segmento-distribucion" className="item-menu">Segmento Distribución</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/segmento-retail" className="item-menu">Segmento Retail</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/club-de-compras" className="item-menu">Club De Compras</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/programas" className="item-menu">PrograMÁS</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/aliados" className="item-menu">Aliados</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/quieres-ser-distribuidor" className="item-menu">¿Quieres ser Distribuidor?</a>
                    </li>
                  </ul>
                </div>

                {/* Add another menu-wrapper for "Sostenibilidad" */}
                <div
                  ref={sostenibilidadWrapperRef}
                  className={`menu-wrapper ${sostenibilidadMenuVisible ? "show-menu" : "hide-menu"}`}
                  style={{
                    position: "absolute",
                    top: menuButtonRef4.current
                      ? menuButtonRef4.current.getBoundingClientRect().bottom + window.scrollY + 43
                      : 0, // Dynamically calculate the position below the button
                    left: menuButtonRef4.current
                      ? menuButtonRef4.current.getBoundingClientRect().left - 200
                      : 0, // Position it under the "Soluciones y Productos" button
                    height: menuHeight, // Dynamically set the height of the menu
                  }}
                >
                  <ul className="rwd-menu">
                    <li>
                      <a href="" className="main-menu">Sostenibilidad</a>
                    </li>
                    <li>
                      <a href="#" className="item-menu master" onClick={() => handleItemMenuClick(submenuRef5)}>net-zero
                        <img className="icon" src="/assets/icons/arrow_right.svg" alt="Icono" />
                      </a>

                      <ul ref={submenuRef5} className="rwd-submenu">
                        <li>
                          <a href="#" className="back-btn item-menu" onClick={handleBackBtnClick}>
                            <img className="icon" src="/assets/icons/arrow_right.svg" style={{ transform: "rotate(180deg)" }} alt="Icono" /> net-zero
                          </a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/nuestro-compromiso" className="item-menu">Nuestro Compromiso</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/nuestra-hoja-de-ruta" className="item-menu">Nuestra Hoja de Ruta</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/nuestra-huella-de-co2" className="item-menu">Nuestra Huella de CO2</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/nuestras-acciones-climaticas-hoy" className="item-menu">Nuestras Acciones Climáticas hoy</a>
                        </li>
                        <li>
                          <a href="https://www.holcim.com.mx/nuestras-soluciones-de-construccion-ecologica" className="item-menu">Nuestras Soluciones de Construccion Ecologica</a>
                        </li>

                      </ul>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/economia-circular" className="item-menu">Economia Circular</a>
                    </li>

                    <li>
                      <a href="https://www.holcim.com.mx/medio-ambiente" className="item-menu">Medio Ambiente</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/gente-comunidades-y-derechos-humanos" className="item-menu">Gente, Comunidades y Derechos Humanos</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/alianzas-y-reconocimientos" className="item-menu">Alianzas y Reconocimientos</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/holcim-fundation" className="item-menu">Holcim Fundation</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/building-icons" className="item-menu">Building Icons</a>
                    </li>
                  </ul>
                </div>

                {/* Add another menu-wrapper for "Responsabilidad Social" */}
                <div
                  ref={responsabilidadWrapperRef}
                  className={`menu-wrapper ${responsabilidadMenuVisible ? "show-menu" : "hide-menu"}`}
                  style={{
                    position: "absolute",
                    top: menuButtonRef4.current
                      ? menuButtonRef4.current.getBoundingClientRect().bottom + window.scrollY + 43
                      : 0, // Dynamically calculate the position below the button
                    left: menuButtonRef4.current
                      ? menuButtonRef4.current.getBoundingClientRect().left + 20
                      : 0, // Position it under the "Soluciones y Productos" button
                    height: menuHeight, // Dynamically set the height of the menu
                  }}
                >
                  <ul className="rwd-menu">
                    <li>
                      <a href="" className="main-menu">Responsabilidad Social</a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/fundacion-holcim-mexico-ac" className="item-menu" >Fundación Holcim México A.C.
                      </a>
                    </li>
                    <li>
                      <a href="https://www.holcim.com.mx/escuela-mexicana-de-la-construccion" className="item-menu">Escuela Mexicana de la Construcción</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="holcim-header-mobile">
        <div className="container">
          <div className="logo-wrapper">
            <a href="https://www.holcim.com.mx/" aria-label="logo">
              <div className="logo">
                <img src="/LogoHolcim.png" alt="Holcim Logo" />
              </div>
            </a>
            <div className="country">MÉXICO</div>
          </div>
          <div className="right-wrapper">
            <a
              className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="hamburger-line"></div>
              <div className="hamburger-line two"></div>
              <div className="hamburger-line"></div>
            </a>
          </div>
        </div>

        {/* Fullscreen Menu */}
        {isMobileMenuOpen && (
          <div className="fullscreen-menu">
            <div className="mobile-menu-corporate-border" ></div>
            <div className="menu-content">
              {/* Menú principal */}
              {currentMobileMenu === "main" && (
                <>
                  <ul className="main-menu">
                    <li>
                      <a
                        className="menu-item mobile first"
                        onClick={() => openSubMenu("nosotros")}
                      >
                        Nosotros
                        <img
                          className="icon"
                          src="/assets/icons/arrow_right.svg"
                          alt="Icono"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-item mobile"
                        onClick={() => openSubMenu("soluciones-y-productos")}
                      >
                        Soluciones y Prodctos
                        <img
                          className="icon"
                          src="/assets/icons/arrow_right.svg"
                          alt="Icono"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-item mobile"
                        onClick={() => openSubMenu("clientes")}
                      >
                        Clientes
                        <img
                          className="icon"
                          src="/assets/icons/arrow_right.svg"
                          alt="Icono"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-item mobile"
                        onClick={() => openSubMenu("sostenibilidad")}
                      >
                        Sostenibilidad
                        <img
                          className="icon"
                          src="/assets/icons/arrow_right.svg"
                          alt="Icono"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-item mobile"
                        onClick={() => openSubMenu("responsabilidad-social")}
                      >
                        Responsabilidad Social
                        <img
                          className="icon"
                          src="/assets/icons/arrow_right.svg"
                          alt="Icono"
                        />
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <ul className="secondary-menu">
                    <li>
                      <a className="mobile-secundary-menu" href="https://www.holcim.com.mx/historias-latam">
                        Historias Latam
                      </a>
                    </li>
                    <li>
                      <a className="mobile-secundary-menu" href="https://www.holcim.com.mx/cotizar">Cotizar</a>
                    </li>
                    <li>
                      <a className="mobile-secundary-menu" href="https://www.holcim.com.mx/prensa">Prensa</a>
                    </li>
                    <li>
                      <a className="mobile-secundary-menu" href="https://www.holcim.com.mx/carreras">Carreras</a>
                    </li>
                    <li>
                      <a className="mobile-secundary-menu" href="https://www.holcim.com.mx/contacto">Contacto</a>
                    </li>
                  </ul>
                </>
              )}


              {/* Submenú de "Nosotros" */}
              {currentMobileMenu === "nosotros" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("main")}
                  >
                    ← Main menu
                  </a>

                  <div className="subMenuTitle">
                    <h3>Nosotros</h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" onClick={() => openSubMenu("quienes-somos")}>Quiénes Somos
                        <img
                          className="icon"
                          src="/assets/icons/arrow_right.svg"
                          alt="Icono"
                        /></a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" onClick={() => openSubMenu("grupo-holcim")} >Grupo Holcim <img
                        className="icon"
                        src="/assets/icons/arrow_right.svg"
                        alt="Icono"
                      /></a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/gobierno-corporativo">Cumplimiento Ético (Compliance) </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/nuestra-vision-y-valores">Nuestra Visión y Valores</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/contacto">Contacto</a>
                    </li>
                  </ul>
                </div>
              )}

              {/* Submenú de "quienes-somos" */}
              {currentMobileMenu === "quienes-somos" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("nosotros")}
                  >
                    ← Nosotros
                  </a>

                  <div className="subMenuTitle">
                    <h3>Quiénes Somos</h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/linea-de-tiempo">Historia (Linea de Tiempo)</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/donde-estamos"> ¿Dónde Estamos? </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/holcim-en-cifras"> Holcim en Cifras </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/estructura-organizacional">Estructura Organizacional</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/que-hacemos"> ¿Qué Hacemos? </a>
                    </li>
                  </ul>
                </div>
              )}



              {/* Submenú de "grupo-holcim" */}
              {currentMobileMenu === "grupo-holcim" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("nosotros")}
                  >
                    ← Nosotros
                  </a>

                  <div className="subMenuTitle">
                    <h3>Grupo Holcim</h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/presencia-mundial"> Presencia Mundial</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com/media/media-releases"> Últimas Noticias Grupo Holcim </a>
                    </li>
                  </ul>
                </div>
              )}



              {/* Submenú de "soluciones-y-productos" */}
              {currentMobileMenu === "soluciones-y-productos" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("main")}
                  >
                    ← Main menu
                  </a>

                  <div className="subMenuTitle">
                    <h3>Soluciones y Productos</h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/soluciones-concretas"> Soluciones Concretas</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/geocycle">Geocycle</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/citec">CiTeC </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/cemento">Cemento</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/agregados">Agregados</a>
                    </li>
                  </ul>
                </div>
              )}



              {/* Submenú de "clientes" */}
              {currentMobileMenu === "clientes" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("main")}
                  >
                    ← Main menu
                  </a>

                  <div className="subMenuTitle">
                    <h3>Clientes</h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/disensa">Disensa</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" onClick={() => openSubMenu("segmentos-de-mercado")} > Segmentos de Mercado <img
                        className="icon"
                        src="/assets/icons/arrow_right.svg"
                        alt="Icono"
                      /></a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/club-de-compras"> Club De Compras </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/programas">PrograMÁS</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/aliados">Aliados</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/quieres-ser-distribuidor"> ¿Quieres ser Distribuidor? </a>
                    </li>
                  </ul>
                </div>
              )}


              {/* Submenú de "segmentos-de-mercado" */}
              {currentMobileMenu === "segmentos-de-mercado" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("clientes")}
                  >
                    ← Clientes
                  </a>

                  <div className="subMenuTitle">
                    <h3>Segmentos de Mercado</h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/segmento-industrial">Segmento Industrial</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/segmento-infraestructura"> Segmento Infraestructura </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/segmento-edificacion"> Segmento Edificación </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/segmento-distribucion"> Segmento Distribución </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/segmento-retail"> Segmento Retail</a>
                    </li>
                  </ul>
                </div>
              )}


              {/* Submenú de "sostenibilidad" */}
              {currentMobileMenu === "sostenibilidad" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("main")}
                  >
                    ← Main menu
                  </a>

                  <div className="subMenuTitle">
                    <h3> Sostenibilidad </h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" onClick={() => openSubMenu("net-zero")} > net-zero <img
                        className="icon"
                        src="/assets/icons/arrow_right.svg"
                        alt="Icono"
                      /></a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/economia-circular"> Economía Circular </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/medio-ambiente"> Medio Ambiente </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/gente-comunidades-y-derechos-humanos"> <div className="padding">Gente, Comunidades y Derechos Humanos </div> </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/alianzas-y-reconocimientos"> Alianzas y Reconocimientos</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/holcim-foundation"> Holcim Foundation</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/building-icons"> Building Icons</a>
                    </li>

                  </ul>
                </div>
              )}


              {/* Submenú de "net-zero" */}
              {currentMobileMenu === "net-zero" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("sostenibilidad")}
                  >
                    ← Sostenibilidad
                  </a>

                  <div className="subMenuTitle">
                    <h3> net-zero </h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/nuestro-compromiso"> Nuestro Compromiso</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/nuestra-hoja-de-ruta"> Nuestra Hoja de Ruta </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/nuestra-huella-de-co2"> Nuestra huella de CO2 </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/nuestras-acciones-climaticas-hoy"> Nuestras Acciones Climáticas hoy  </a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/nuestras-soluciones-de-construccion-ecologica-0"> <div className="padding">Nuestras Soluciones de Construccion Ecologica</div> </a>
                    </li>

                  </ul>
                </div>
              )}


              {/* Submenú de "responsabilidad-social" */}
              {currentMobileMenu === "responsabilidad-social" && (
                <div className="submenu">
                  <a
                    className="back-button"
                    onClick={() => goBackToMainMenu("main")}
                  >
                    ← Main menu
                  </a>

                  <div className="subMenuTitle">
                    <h3> Responsabilidad Social </h3>
                  </div>

                  <ul>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/fundacion-holcim-mexico-ac"> Fundación Holcim México A.C.</a>
                    </li>
                    <div className="separador"></div>
                    <li>
                      <a className="submenu-item" href="https://www.holcim.com.mx/escuela-mexicana-de-la-construccion"> Escuela Mexicana de la Construcción </a>
                    </li>

                  </ul>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
