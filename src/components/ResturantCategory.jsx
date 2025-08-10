// import React from "react";
import {useState} from "react";
import ItemList from "./ItemList";
import { ChevronDown, ChevronUp } from "lucide-react";
//2:11:01

const ResturantCategory = ({ data, showItems, SetShowIndex }) => {

  // const [showItems, SetShowItems]=useState(false);
  // console.log(data);
  const handleClick = () => {
    // SetShowItems(!showItems);
    SetShowIndex();
  };
  return (
    <div className="w-full">
      {/** Header */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-4">
        <div 
          className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200" 
          onClick={handleClick}
        >
          <div className="flex-1">
            <span className="font-bold text-lg md:text-xl text-gray-800">
              {data.title}
            </span>
            <span className="ml-2 text-sm md:text-base text-gray-500">
              ({data.itemCards?.length || 0} items)
            </span>
          </div>
          <div className="flex items-center">
            {showItems ? (
              <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            )}
          </div>
        </div>
        {showItems && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResturantCategory;
