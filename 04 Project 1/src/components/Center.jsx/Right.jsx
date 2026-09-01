import React from "react";
import Card from "./Card";

const Right = (props) => {
  return (
    <div className="w-2/3 h-full px-2 flex justify-start items-center gap-4 flex-nowrap overflow-x-auto scrollbar-none">
      {props.users.map((elem, idx) => {
        return (
          <Card
            key={idx}
            image={elem.image}
            info={elem.info}
            status={elem.status}
            idx={idx}
          />
        );
      })}
    </div>
  );
};

export default Right;
