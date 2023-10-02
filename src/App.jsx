import { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import MainLogo from "./assets/csLogo.png"
import Resultados from "./components/Resultados";
function App() {
  const [datos, setDatos] = useState([]);
  const importarDatos = async() =>{
    const data = await fetch("http://localhost:3000/books");
    const res = await data.json();
    // console.log(res);
    setDatos(res);
  }
  // console.log(datos);
  return (
    <div className="flex items-center flex-col justify-center gap-20  bg-blue-600">
    <img src={MainLogo}/>
      <Buscador importarDatos = {importarDatos} />
      <Resultados datos={datos} />
    </div>
  );
}

export default App;
