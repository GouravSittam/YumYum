import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utils/useRestrauntMenu";
import ResturantCategory from "./ResturantCategory";
import {useState} from "react"
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const navigate = useNavigate();

  const resInfo = useRestrauntMenu(resId);

  const [showIndex, SetShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  // Extracting the restaurant information
  const restaurant = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage, avgRating, sla, areaName } = restaurant || {};

  // Extracting the menu items
  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="min-h-screen bg-pink-50 mt-28">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Restaurants</span>
        </button>

        {/* Restaurant Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
              {name || "Restaurant Name"}
            </h1>
            
            {/* Restaurant Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{areaName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{sla?.deliveryTime} mins delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{avgRating} rating</span>
                </div>
              </div>
            </div>

            {/* Cuisines and Cost */}
            <div className="border-t border-gray-100 pt-4">
              <p className="text-lg md:text-xl text-gray-700 font-medium">
                {cuisines?.join(", ")} - {costForTwoMessage}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-4">
          {categories?.map((category, index) => (
            <ResturantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex}
              SetShowIndex={() => SetShowIndex(index)}
            />
          ))}
        </div>

        {/* Empty Menu State */}
        {categories?.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🍽️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Menu not available</h2>
            <p className="text-gray-600">This restaurant's menu is currently unavailable.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
