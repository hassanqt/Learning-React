import React, { useState } from "react";

const App = () => {
  const [clickkk, setClickkk] = useState(0);

  let inc = () => {
    setClickkk(++clickkk);
  };

  let dec = () => {
    if (clickkk > 0) {
      setClickkk(--clickkk);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <h2>The value of variable num is {clickkk}</h2>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={inc}
          className="px-6 py-2 bg-green-500 rounded-full cursor-pointer active:translate-y-0.5"
        >
          Increase
        </button>
        <button
          onClick={dec}
          className="px-6 py-2 bg-red-500 rounded-full cursor-pointer active:translate-y-0.5"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
