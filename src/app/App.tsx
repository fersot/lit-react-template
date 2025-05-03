import React from 'react';

import "../shared/tailwind.global.css";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      {message }
    </h1>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
    </>
  );
};

export default App;