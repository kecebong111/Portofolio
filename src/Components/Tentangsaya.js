// About.js
import React from "react";
import "../CSS/Tentangsaya.css";
import myImage from "./image.jpg";

const Tentangsaya = () => {
  return (
    <div className="container">
      <h1>Halo!</h1>
      <p>Nama saya Aditya Rahman dari kelas XIR8.</p>
      <img src={myImage} alt="Adit" className="Adit
      +." />
    </div>
  );
};

export default Tentangsaya;
