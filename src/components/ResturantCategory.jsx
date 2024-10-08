import React from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
//   console.log(data);
  return (
    <div>
      {/** Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
      <div className="flex justify-between">
        <span className="font-bold text-l">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>
        <ItemList item={data.itemCards} />
      </div>
      {/** Accordian body */}
    </div>
  );
};

export default ResturantCategory;
