import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import CorporateBorder from "./components/CorporateBorder";
import Footer from "./components/footer/Footer";
import ButtonGroup from "./components/buttonGroup/ButtonGroup";
import Content1 from "./pages/Content1";
import Content2 from "./pages/Content2";
import Content3 from "./pages/Content3";
import Content4 from "./pages/Content4";
import Content5 from "./pages/Content5";
import Content6 from "./pages/Content6";

const App = () => (
  <div style={{ width: "100vw" }}>
    <div id="page">

      <Router>
        <Header />
        <CorporateBorder />

        <div style={{ position: "relative" }}>
          <ButtonGroup />
        </div>

        <main>
          <Routes>
            <Route path="/content1" element={<Content1 />} />
            <Route path="/content2" element={<Content2 />} />
            <Route path="/content3" element={<Content3 />} />
            <Route path="/content4" element={<Content4 />} />
            <Route path="/content5" element={<Content5 />} />
            <Route path="/content6" element={<Content6 />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>

  </div>
);

/*

*/

export default App;
