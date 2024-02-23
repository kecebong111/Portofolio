import React from "react";
import myImage from "../Anjay.jpeg";

function Karya() {
  return (
    <div className="container">
      <h1>Halaman Karya</h1>
      <p>Ini adalah halaman karya saya.</p>
      <img src={myImage} alt="Foto Karya" className="image" />
    </div>
  );
}

export default Karya;
