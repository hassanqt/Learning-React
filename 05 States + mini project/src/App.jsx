import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const App = () => {
  let [counter, setCounter] = useState(0);

  let addValue = () => {
    setCounter((prev) => prev + 1);
  };

  let resetValue = () => {
    setCounter(counter * 0);
  };

  return (
    <div className="w-screen h-screen bg-gray-700 text-white text-2xl flex flex-col justify-center gap-4 items-center">
      <h1>Tasbeeh Counter | React Counter</h1>
      <div className="flex justify-center items-center gap-6">
        <IoLogoJavascript className="w-24 h-24" />
        <FaReact className="animate-spin [animation-duration:60s] w-24 h-24" />
      </div>
      <h2>Counter value: {counter}</h2>
      <div className="flex felx-col justify-center items-center gap-4">
        <button
          onClick={addValue}
          className="cursor-pointer border-2 border-blue-300 active:border-blue-400 px-6 py-2 bg-gray-900 text-lg rounded-lg"
        >
          Add Value
        </button>
        <br />
        <button
          onClick={resetValue}
          className="cursor-pointer border-2 border-rose-300 active:border-rose-400 px-6 py-2 bg-gray-900 text-lg rounded-lg"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default App;
