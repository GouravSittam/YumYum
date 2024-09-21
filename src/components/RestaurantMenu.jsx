import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResinfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  //here i fetch the api 

  return (
    <div className="menu">
      <h1></h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
