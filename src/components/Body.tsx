import React, { useEffect, useState, ChangeEvent } from "react";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../Utils/useOnlineStatus";

export interface RestaurantInfo {
  id: string;
  name: string;
  cuisines: string[];
  avgRating: number;
  costForTwo: string;
  cloudinaryImageId: string;
  sla: { deliveryTime: number };
}

export interface Restaurant {
  info: RestaurantInfo;
}

export interface SwiggyAPIResponse {
  data: {
    cards: Array<{
      card: {
        card: {
          id: string;
          name: string;
          restaurants: Restaurant[];
        };
      };
    }>;
  };
}

const Body: React.FC = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState<Restaurant[]>(
    []
  );
  const [searchText, setSearchText] = useState<string>("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING"
      );
      const json: SwiggyAPIResponse = await data.json();
      // This mapping may need to be adjusted based on actual API response
      const restaurants = json?.data?.cards?.flatMap(
        (card) => card.card.card.restaurants || []
      );
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    const filtered = ListOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  if (!onlineStatus) {
    return <h1>🔴 Offline, please check your internet connection.</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search for restaurants..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:border-pink-400"
        />
        <button
          className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-all duration-300 shadow-md"
          onClick={() =>
            setFilteredRestaurant(
              ListOfRestaurants.filter((res) => res.info.avgRating > 4)
            )
          }
        >
          import RestaurantCards, {WithPromtedFunction} from "./RestaurantCard";
          // Importing RestaurantCards
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
