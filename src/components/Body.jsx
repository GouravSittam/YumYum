// File migrated to Body.tsx and can be safely removed.
import RestaurantCards, { WithPromtedFunction } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { Search, Filter } from "lucide-react";

const Body = () => {
  //State variable - super powerful variable
  const [ListOfRestaurants, setListofRestraunt] = useState([]);
  const [filteredRestaurant, SetfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = WithPromtedFunction(RestaurantCards);

  //whenever state variable update, react triggers a reconcilation cycle(re-render the component)
  console.log("Body Rendered", ListOfRestaurants);

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50 mt-28">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">📡</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Looks like you're offline!
          </h1>
          <p className="text-gray-600">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );

  // I do here conditional rendring
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-pink-50 mt-28 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-14 px-4 fancy-hero">
        <div className="max-w-7xl mx-auto text-center group">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight text-hero">
            Discover Amazing Restaurants
          </h1>
          <div className="underline-hero mx-auto"></div>
          <p className="text-lg md:text-xl mt-6 mb-8 text-subhero">
            Order from the best restaurants in your area
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Section */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Search for restaurants, cuisines, or dishes..."
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              className="w-full lg:w-auto px-8 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
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
              <Search className="w-5 h-5" />
              Search
            </button>

            {/* Filter Button */}
            <button
              className="w-full lg:w-auto px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
              onClick={() => {
                const filteredList = ListOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.4
                );
                setListofRestraunt(filteredList);
              }}
            >
              <Filter className="w-5 h-5" />
              Top Rated
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found{" "}
            <span className="font-semibold text-pink-600">
              {filteredRestaurant.length}
            </span>{" "}
            restaurants
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
              className="block transform hover:scale-105 transition-transform duration-300"
            >
              <RestaurantCards resData={restaurant} />
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredRestaurant.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No restaurants found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
