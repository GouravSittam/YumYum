// import React from "react";
import {useState} from "react";
import ItemList from "./ItemList";
//1:33:38

const ResturantCategory = ({ data }) => {

  const [showItems, SetShowItems]=useState(false);
  // console.log(data);
  const handleClick = () => {
    SetShowItems(!showItems);
  };
  return (
    <div>
      {/** Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-l">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
