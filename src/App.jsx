import { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import MainLogo from "./assets/csLogo.png"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center flex-col justify-center gap-20 h-screen bg-blue-600">
    <img src={MainLogo}/>
      <Buscador />
    </div>
  );
}

export default App;
