import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItem } from "../Utils/CartSlices";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/payment");
    window.scrollTo(0, 0); // Add this line to force scroll to the top
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="text-center m-4 p-4 mt-28">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>No Items!!!</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} onRemoveItem={handleRemoveItem} />
      </div>
      <div className="w-6/12 m-auto bg-orange-400 px-2 py-4 flex justify-between text-2xl font-bold text-slate-100">
        <div>Total</div>
        <div className="mr-2">
          ₹ {cartItems.reduce((total, individual) => total + (individual.card.info.price ? individual.card.info.price / 100 : individual.card.info.defaultPrice / 100), 0).toFixed(2)}
        </div>
      </div>
      <div className="w-6/12 m-auto flex justify-end mt-4">
        <button className="bg-green-500 font-semibold p-2 text-white rounded-lg" onClick={handleCheckout}>Checkout</button>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center p-2 border-b">
            <span>{item.card.info.name}</span>
            <button
              className="bg-red-500 text-white p-1 rounded"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
