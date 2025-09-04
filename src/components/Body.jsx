import React, { useState, useEffect } from "react";
import { Search, Star, Filter, MapPin, Clock, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const RestaurantCard = ({ resData }) => {
  const { info } = resData;
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`;

  return (
    <Link to={`/restaurants/${info.id}`}>
      <div className="group relative w-80 h-96 m-4 overflow-hidden rounded-2xl border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer">
        {info.promoted && (
          <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Promoted
          </div>
        )}
        
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={info.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/300x200?text=Restaurant";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-orange-500 transition-colors">
              {info.name}
            </h3>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{info.avgRating}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{info.sla.deliveryTime} mins</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-500">
              <Utensils className="w-4 h-4" />
              <p className="text-sm line-clamp-1">{info.cuisines.join(", ")}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{info.areaName}</span>
              </div>
              <span className="font-semibold text-sm">{info.costForTwo}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-80 h-96 m-4 rounded-2xl bg-gray-200 animate-pulse">
          <div className="h-48 bg-gray-300 rounded-t-2xl" />
          <div className="p-4 space-y-3">
            <div className="h-6 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-4 bg-gray-300 rounded w-full" />
            <div className="h-4 bg-gray-300 rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Fallback to mock data if API fails
  //     const mockRestaurants = [
  //       {
  //         info: {
  //           id: "1",
  //           name: "Pizza Palace",
  //           avgRating: 4.5,
  //           cuisines: ["Italian", "Pizza", "Fast Food"],
  //           areaName: "Downtown",
  //           sla: { deliveryTime: 30 },
  //           cloudinaryImageId: "pizza-image",
  //           costForTwo: "₹300 for two",
  //           promoted: true
  //         }
  //       },
  //       {
  //         info: {
  //           id: "2",
  //           name: "Burger Barn",
  //           avgRating: 4.2,
  //           cuisines: ["American", "Burgers", "Fast Food"],
  //           areaName: "City Center",
  //           sla: { deliveryTime: 25 },
  //           cloudinaryImageId: "burger-image",
  //           costForTwo: "₹250 for two"
  //         }
  //       },
  //       {
  //         info: {
  //           id: "3",
  //           name: "Sushi Sensation",
  //           avgRating: 4.7,
  //           cuisines: ["Japanese", "Sushi", "Asian"],
  //           areaName: "Uptown",
  //           sla: { deliveryTime: 45 },
  //           cloudinaryImageId: "sushi-image",
  //           costForTwo: "₹800 for two"
  //         }
  //       },
  //       {
  //         info: {
  //           id: "4",
  //           name: "Taco Fiesta",
  //           avgRating: 4.3,
  //           cuisines: ["Mexican", "Tacos", "Spicy"],
  //           areaName: "West Side",
  //           sla: { deliveryTime: 35 },
  //           cloudinaryImageId: "taco-image",
  //           costForTwo: "₹400 for two"
  //         }
  //       },
  //       {
  //         info: {
  //           id: "5",
  //           name: "Curry Corner",
  //           avgRating: 4.6,
  //           cuisines: ["Indian", "Curry", "Spicy"],
  //           areaName: "Little India",
  //           sla: { deliveryTime: 40 },
  //           cloudinaryImageId: "curry-image",
  //           costForTwo: "₹350 for two"
  //         }
  //       },
  //       {
  //         info: {
  //           id: "6",
  //           name: "Pasta Paradise",
  //           avgRating: 4.4,
  //           cuisines: ["Italian", "Pasta", "European"],
  //           areaName: "Old Town",
  //           sla: { deliveryTime: 35 },
  //           cloudinaryImageId: "pasta-image",
  //           costForTwo: "₹450 for two"
  //         }
  //       }
  //     ];
      
  //     setListOfRestaurants(mockRestaurants);
  //     setFilteredRestaurants(mockRestaurants);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
      restaurant.info.cuisines.some(cuisine => 
        cuisine.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.4
    );
    setFilteredRestaurants(filtered);
  };

  const handleReset = () => {
    setFilteredRestaurants(listOfRestaurants);
    setSearchText("");
  };

  if (!onlineStatus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">You're Offline!</h1>
          <p className="text-gray-600">Please check your internet connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 pt-32 pb-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Restaurants
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the best restaurants near you with fast delivery and great taste
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12 max-w-4xl mx-auto">
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="pl-10 h-12 w-full text-base border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button 
              onClick={handleSearch}
              className="h-12 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Search
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleTopRated}
              className="h-12 px-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Top Rated (4.4+)
            </button>
            <button
              onClick={handleReset}
              className="h-12 px-4 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results Count */}
        {!isLoading && (
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredRestaurants.length} restaurants
            </p>
          </div>
        )}

        {/* Restaurant Cards */}
        {isLoading ? (
          <Shimmer />
        ) : filteredRestaurants.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No restaurants found
            </h2>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters
            </p>
            <button 
              onClick={handleReset}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Show All Restaurants
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
