import React, { useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import UserContext, { UserContextType } from "../Utils/UserContext";
import { Restaurant } from "./Body";

export interface RestaurantCardProps {
  resData: Restaurant;
}

export interface RestaurantContainerProps {
  children: React.ReactNode;
}

const RestaurantContainer: React.FC<RestaurantContainerProps> = ({
  children,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {children}
  </div>
);

const RestaurantCard: React.FC<RestaurantCardProps> = ({ resData }) => {
  const { loggedInUser } = useContext<UserContextType>(UserContext);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData.info;
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-48 object-cover object-center"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-pink-600 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>⭐ {avgRating}</span>
          <span>{costForTwo}</span>
        </div>
        <div className="text-xs text-gray-400">
          Delivery: {sla.deliveryTime} min
        </div>
        <div className="mt-2 text-xs text-gray-500">User: {loggedInUser}</div>
      </div>
    </div>
  );
};

export { RestaurantContainer };
export default RestaurantCard;
