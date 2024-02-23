
import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "./Components/Beranda";
import Tentangsaya from "./Components/Tentangsaya";
import Karya from "./Components/Karya";
import Kontak from "./Components/Kontak";

function Utama() {
  return (
    <Routes>
      <Route exact path="/" element={<Beranda />} />
      <Route path="/Tentangsaya" element={<Tentangsaya />} />
      <Route path="/Karya" element={<Karya />} />
      <Route path="/Kontak" element={<Kontak />} />
    </Routes>
  );
}

export default Utama;
