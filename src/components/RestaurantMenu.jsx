import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // Extracting the restaurant information
  const restaurant = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = restaurant || {};

  // Extracting the menu items
  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name || "Restaurant Name"}</h1>
      {/* <h2>{cuisines ? cuisines.join(", ") : "Cuisines"}</h2> */}
      <p>
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
