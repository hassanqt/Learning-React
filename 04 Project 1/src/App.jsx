import React from "react";
import Header from "./components/Header";
import Center from "./components/Center.jsx/Center";

const App = () => {

  const users = [
    {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: '',
      status: "Satistied"
  },
  {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: '',
      status: "not Satistied"
  },
  {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: '',
      status: "hee"
  },
  {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: '',
      status: "Satistied"
  },
  {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: '',
      status: "Satistied"
  },
  {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: '',
      status: "Satistied"
  },
  {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: '',
      status: "Satistied"
  },
]
  return (
    <div className="w-full h-screen scrollbar-none overflow-auto">
      <Header />
      <Center users={users} />
    </div>
  );
};

export default App;
