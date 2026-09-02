import Left from "./components/Left";
import Right from "./components/Right";

const App = () => {
  return (
    <div className="w-full h-screen p-10 flex gap-4 bg-black/90">
      <Left />
      <Right />
    </div>
  );
};

export default App;
