import React from "react";

const Header = () => {
  return (
  <header className="px-20 py-6 flex justify-between items-center">
    <button className="px-6 py-2 text-white bg-black/95 rounded-full cursor-pointer uppercase">Target Audience</button>
    <button className="px-6 py-2 text-black bg-gray-200 tracking-normal rounded-full cursor-pointer uppercase">Digital Banking Platform</button>
  </header>
  )
};

export default Header;
