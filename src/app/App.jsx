import React from "react";

const App = function ({ props }) {

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
      <div className="text-2xl font-bold text-blue-600">Hola, {props.name} 👋</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </>

  );
}

export default App;