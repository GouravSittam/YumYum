import { CDN_URl } from "../Utils/constants";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="w-full sm:w-[300px] p-4">
      <div className="h-[450px] flex flex-col justify-between rounded-lg bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <div className="p-4">
          <img
            className="rounded-lg shadow-md transition-transform transform hover:scale-105 object-cover h-40 w-full"
            alt="res-logo"
            src={CDN_URl + cloudinaryImageId}
          />
          <div className="flex flex-col justify-between flex-grow mt-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{name}</h3>
              <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
            </div>
            <div className="mt-4">
              <h4 className="text-yellow-500 font-semibold">{avgRating} stars</h4>
              <h4 className="text-gray-700">{costForTwo}</h4>
              <h4 className="text-gray-500">{resData.info.sla.deliveryTime} minutes</h4>
              <h4 className="text-gray-500">User: {loggedInUser}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;