import React from "react";
import Card from "./Card";

const Right = (props) => {
  console.log(props);

  return (
    <div className="w-2/3 h-full px-2 flex justify-start items-center gap-4 flex-nowrap overflow-x-auto scrollbar-none">
      {props.map((elem) => {
        return (
          <Card image={props.image} info={props.info} status={props.status} />
        );
      })}
    </div>
  );
};

export default Right;
