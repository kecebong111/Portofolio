// Beranda.js
import React from "react";
import "../CSS/Beranda.css";

const Beranda = () => {
  return (
    <div className="container">
      <h1>Selamat Datang!</h1>
      <p>Ini adalah web pertama saya menggunakan React!</p>
      <a href="/Tentangsaya" className="tombol">Tentang Saya!</a>
    </div>
  );
};

export default Beranda;
