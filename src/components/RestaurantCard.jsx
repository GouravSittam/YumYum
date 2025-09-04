// File migrated to RestaurantCard.tsx and can be safely removed.
import { CDN_URl } from "../Utils/constants";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { Star, Clock, DollarSign } from "lucide-react";

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
    <div className="w-full h-full">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <div className="relative">
          <img
            className="w-full h-48 sm:h-52 md:h-56 object-cover"
            alt={name}
            src={CDN_URl + cloudinaryImageId}
            loading="lazy"
          />
          {/* Delivery Time Badge */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">
              {resData.info.sla.deliveryTime} mins
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
            <Star size={14} className="fill-current" />
            <span>{avgRating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Restaurant Name */}
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 leading-tight">
            {name}
          </h3>

          {/* Cuisines */}
          <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">
            {cuisines.join(", ")}
          </p>

          {/* Price and Details */}
          <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="font-medium">{costForTwo}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{resData.info.sla.deliveryTime} mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
