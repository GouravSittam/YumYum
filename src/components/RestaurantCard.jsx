import { CDN_URl } from "../Utils/constants";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";


const RestaurantCards = (props) => {
  const { resData } = props;

  const {loggedInUser}=useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      className="m-4 p-6 w-[300px] rounded-lg bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
    >
      <img
        className="rounded-lg shadow-md transition-transform transform hover:scale-105"
        alt="res-logo"
        src={CDN_URl + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg text-gray-800">{name}</h3>
      <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-yellow-500 font-semibold">{avgRating} stars</h4>
      <h4 className="text-gray-700">{costForTwo}</h4>
      <h4 className="text-gray-500">{resData.info.sla.deliveryTime} minutes</h4>
      <h4 className="text-gray-500">User: {loggedInUser}</h4>
 
    </div>
  );
};

// Higher Order Compenent 
// Input - RestaurantCards=> RestaurantCardPromoted


export default RestaurantCards;