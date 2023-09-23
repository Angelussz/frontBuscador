import React from "react";
import searchIcon from "../assets/searchIcon.svg";
function Buscador() {
  return (
    <div className="flex items-center bg-blue-200 gap-2 rounded-full">
      <img src={searchIcon} className="w-11 h-4/5" />
      <form action="">
        <input type="text" name="Buscador"  className="inline-block h-10 bg-inherit border-x-2 border-cyan-50"/>
        <button type="submit" className="mx-3">Buscar</button>
      </form>
    </div>
  );
}

export default Buscador;
