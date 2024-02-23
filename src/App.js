import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Beranda from "./Components/Beranda";
import Tentangsaya from "./Components/Tentangsaya";
import Karya from "./Components/Karya";
import Kontak from "./Components/Kontak";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Beranda />} />
          <Route path="/Tentangsaya" element={<Tentangsaya />} />
          <Route path="/Karya" element={<Karya />} />
          <Route path="/Kontak" element={<Kontak />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
