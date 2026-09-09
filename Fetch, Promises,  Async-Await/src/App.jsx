import axios from "axios";
import { useState } from "react";

const App = () => {
  const [dataa, setDataa] = useState([]);

  let fetchData = async () => {
    let data = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDataa(data.data);
    console.log(data.data);
    
  };

  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center">
      <button
        onClick={fetchData}
        className="px-6 py-2 bg-rose-500 text-white cursor-pointer active:translate-y-px rounded-full"
      >
        Click me to fetch random dog image
      </button>
      <div>
        <img className="size-auto" src={dataa.message} alt="" />
      </div>
    </div>
  );
};

export default App;
