import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import { useState } from "react";
function Buscador() {
  const [buscar, setBuscar] = useState("");
  const almacenarBusqueda = (e) => {
    setBuscar(e.target.value);
  };
  return (
    <form
      action=""
      className="flex items-center bg-blue-200 rounded-full w-3/4 justify-around"
    >
      <img src={searchIcon} className="w-11 h-4/5" />
      <input
        type="text"
        name="Buscador"
        onChange={almacenarBusqueda}
        className="inline-block h-10 bg-inherit border-x-2 border-cyan-50 w-3/4"
      />
      <button type="submit" className="mx-3">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
