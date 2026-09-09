import axios from "axios";
import { useState } from "react";

const App = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await axios.get("/catapi/v1/images/search?limit=8");
    setCats(response.data.slice(0, 8));
  };

  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center gap-4 overflow-hidden p-4">
      <button
        onClick={fetchCats}
        className="cursor-pointer rounded-full bg-amber-500 px-6 py-2 text-white active:translate-y-px"
      >
        Click me to fetch random cat images
      </button>

      <div className="grid w-full max-w-5xl grid-cols-4 grid-rows-2 place-items-center gap-2 sm:gap-4">
        {cats.map((cat) => (
          <div
            className="aspect-[4/3] max-h-[calc((100dvh-5rem)/2)] overflow-hidden rounded-xl"
            key={cat.id}
          >
            <img
              className="size-full object-cover"
              src={cat.url}
              alt="A random cat"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
