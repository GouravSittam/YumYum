import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlices";
import { Plus, Star } from "lucide-react";

// import { CDN_URl } from "../Utils/constants";
const ItemList = ({ items, onRemoveItem }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    //Dispached an action
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
        >
          {/* Content Section */}
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {item.card.info.name}
                </h3>
                {item.card.info.ratings?.aggregatedRating?.rating && (
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-600">
                      {item.card.info.ratings.aggregatedRating.rating}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-right ml-4">
                <span className="font-medium text-gray-800 text-sm md:text-base">
                  ₹{item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
            </div>
            
            {item.card.info.description && (
              <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                {item.card.info.description}
              </p>
            )}
            
            {item.card.info.itemAttribute?.vegClassifier && (
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-sm ${
                  item.card.info.itemAttribute.vegClassifier === 'VEG' 
                    ? 'bg-green-500' 
                    : 'bg-red-500'
                }`}></span>
                <span className="text-xs text-gray-600">
                  {item.card.info.itemAttribute.vegClassifier}
                </span>
              </div>
            )}
          </div>

          {/* Image and Add Button Section */}
          <div className="relative flex-shrink-0">
            <div className="relative">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
                alt={item.card.info.name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                loading="lazy"
              />
              <button
                className="absolute -bottom-2 -right-2 p-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 transform hover:scale-110"
                onClick={() => handelAddItem(item)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
