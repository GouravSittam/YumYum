import { CDN_URl } from "../Utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URl
          +
          resData.info.cloudinaryImageId
        }
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCards;
