import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/CartSlices";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 mt-28">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-l"
        onClick={handelClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>No Items!!!</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
