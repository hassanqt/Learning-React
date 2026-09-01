import { ArrowRight } from "lucide-react";
import React from "react";

const Card = (props) => {
  return (
    <div className="relative h-full rounded-4xl overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="text-white w-full h-full flex flex-col items-start justify-between absolute px-6 py-6 top-0 left-0">
        <h2 className="size-8 font-bold rounded-full text-black bg-white flex justify-center items-center">
          1
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa
            tempore, quia nostrum necessitatibus cumque!
          </p>
          <div className="flex justify-between items-center">
            <button className="py-2 px-6 bg-blue-500 rounded-full">Satisfied</button>
            <button className="py-2 px-4 bg-blue-500 rounded-full">
              <ArrowRight className="size-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
