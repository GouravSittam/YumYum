import { CDN_URl } from "../Utils/constants";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { Star } from "lucide-react";

const RestaurantContainer = ({ children }) => {
  return (
    <div className="min-h-screen pb-32 md:pb-40">
      {/* Main content wrapper with bottom padding for footer */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

const RestaurantCards = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="w-full sm:w-[250px] lg:w-[300px] p-2 md:p-4">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Image Container */}
        <div className="relative">
          <img
            className="w-full h-[200px] object-cover rounded-t-lg"
            alt={name}
            src={CDN_URl + cloudinaryImageId}
          />
          <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
            {resData.info.sla.deliveryTime} mins
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Restaurant Name and Rating */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center gap-1 bg-green-500 text-white px-1.5 py-0.5 rounded text-sm">
              <Star size={14} className="fill-current" />
              {avgRating}
            </div>
          </div>

          {/* Cuisines */}
          <p className="text-gray-500 text-sm line-clamp-1 mb-2">
            {cuisines.join(", ")}
          </p>

          {/* Price and Details */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{costForTwo}</span>
            <span>• {resData.info.sla.deliveryTime} mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;