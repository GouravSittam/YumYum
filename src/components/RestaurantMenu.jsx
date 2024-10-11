import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utils/useRestrauntMenu";
import ResturantCategory from "./ResturantCategory";
import {useState} from "react"
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  const [showIndex, SetShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  // Extracting the restaurant information
  const restaurant = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = restaurant || {};

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
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name || "Restaurant Name"}</h1>
      {/* <h2>{cuisines ? cuisines.join(", ") : "Cuisines"}</h2> */}
      <p className="font-bold text-2xl">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      {/** categories accordiums */}
      {categories.map((category, index) => (
        //control component
        <ResturantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          SetShowIndex={()=>SetShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
