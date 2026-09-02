import React from "react";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted by", val);
          setVal("")
        }}
        className="flex justify-center items-center flex-col gap-4"
      >
        <input
          type="text"
          name=""
          onChange={(e) => {
            setVal(e.target.value);
          }}
          value={val}
          id="user"
          placeholder="Enter Username..."
          className="select-none px-2 bg-gray-300 py-1 border rounded-lg"
        />
        <input
          type="submit"
          value="Submit"
          className="px-3 py-1 cursor-pointer border rounded-lg bg-[#ddd]"
        />
      </form>
    </div>
  );
};

export default App;
