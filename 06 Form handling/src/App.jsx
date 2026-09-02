import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
        }}
        className="flex justify-center items-center flex-col gap-4"
      >
        <input
          type="text"
          name=""
          id="user"
          placeholder="Enter Username..."
          className="px-2 bg-gray-300 py-1 border rounded-lg"
          onChange={(e) => {
            console.log(e.target.value)
          }}
        />
        <input
          type="submit"
          value="Submit"
          className="px-3 py-1 border rounded-lg bg-[#ddd]"
        />
      </form>
    </div>
  );
};

export default App;
