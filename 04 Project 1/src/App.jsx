import React from "react";
import Header from "./components/Header";
import Center from "./components/Center.jsx/Center";

const App = () => {
  return (
    <div className="w-full h-screen scrollbar-none overflow-auto">
      <Header />
      <Center />
    </div>
  );
};

export default App;
