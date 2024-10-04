import RestaurantCards from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  //State variable - super powerful variable
  const [ListOfRestaurants, setListofRestraunt] = useState([]);
  const [filteredRestaurant, SetfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //whenever state variable update, react triggers a reconcilation cycle(re-render the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //optional chaining
    setListofRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SetfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(ListOfRestaurants);


  //feature of offline and online
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like ur ofline!! please check ur internet connection</h1>;

  // I do here conditional rendring
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the resturant cards and update the UI
              //Search text
              console.log(searchText);

              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              SetfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListofRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
