import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-start flex-wrap gap-4 p-4">
      <Card name="James Lee" option="Get in Touch" age={19} image="https://avatars.githubusercontent.com/u/236013218?v=4" desc="James Lee is a fighting genius from Lookism Comic Book" />
      <Card name="Kakashi Hatake" option="Contact Me" age={26} desc="Kakashi Hatake is a skilled shinobi who is also 6th hokage" image="https://i.pinimg.com/736x/1e/7b/18/1e7b182e5fe233e50f116b0b3d1f16b2.jpg" />
    </div>
  );
};

export default App;
