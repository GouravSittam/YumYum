// import { CDN_URl } from "../Utils/constants";
//1:25:53
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
  {items.map((item) => (
    <div
      key={item.card.info.id}
      className="p-2 m-2 border-gray-200 border-b-2 text-left"
    >
      <img
        src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}
        alt={item.card.info.name}
        className="w-14"
      />
      <div className="py-2">
        <span>{item.card.info.name}</span>
        <span>
          - ₹
          {item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100}
        </span>
      </div>
      <p className="text-xs">{item.card.info.description}</p>
    </div>
  ))}
</div>

  );
};

export default ItemList;
