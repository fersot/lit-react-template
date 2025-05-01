import React from "react";
import './styles.css';

const App = function ({ props }) {
  const dataFromENV = import.meta.env.VITE_VARIABLE_TEST; // Asi se pueden leer las variables de entorno en VITE importante: el prefijo VITE_ es obligatorio para que Vite las lea.
 
  return (
    <>
      <h1>HOLAAAAAA</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
      <div className="text-2xl font-bold text-blue-600">Hola, {props.name} 👋</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </>

  );
}

export default App;