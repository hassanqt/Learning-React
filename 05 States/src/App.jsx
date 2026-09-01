import React, { useState } from "react";

const App = () => {
  let [number, setNumber] = useState(0);

  let inc = () => {
    console.log("Heyyyyyyyyy")
    setNumber(++number);
  };

  let dsc = () => {
    console.log("Heyy");
    if (number > 0) setNumber(number - 1);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className="wrapper flex justify-center items-center">The Current Value of number is: {number}</div>
      <div className="flex justify-center items-center gap-4">
        <button onClick={inc} className="py-2 px-6 rounded-full cursor-pointer active:translate-y-0.5 bg-green-500">Increase Value</button>
        <button onClick={dsc} className="py-2 px-6 rounded-full cursor-pointer active:translate-y-0.5 bg-red-500">Decrease Value</button>
      </div>
    </div>
  );
};

export default App;
