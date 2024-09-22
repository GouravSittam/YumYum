import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await response.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  // Extracting the restaurant information
  const restaurant = resInfo?.cards?.find((card) => card.card?.card?.info)?.card
    ?.card?.info;
  const { name, cuisines, costForTwoMessage } = restaurant || {};

  // Extracting the menu items
  const menuItems =
    resInfo?.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (card) => card.card?.card?.itemCards || []
      ) || [];

  return (
    <div className="menu">
      <h1>{name || "Restaurant Name"}</h1>
      <h2>{cuisines ? cuisines.join(", ") : "Cuisines"}</h2>
      <h2>{costForTwoMessage || "Cost for Two"}</h2>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
