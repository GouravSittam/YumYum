import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItem } from "../Utils/CartSlices";
import ItemList from "./ItemList";
import { Trash2, ShoppingCart, ArrowLeft, CreditCard } from "lucide-react";

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

  const totalAmount = cartItems.reduce((total, individual) => 
    total + (individual.card.info.price ? individual.card.info.price / 100 : individual.card.info.defaultPrice / 100), 0
  );

  return (
    <div className="min-h-screen bg-pink-50 mt-28">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-pink-500" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Your Cart</h1>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
          </div>
          
          {cartItems.length > 0 && (
            <button
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              onClick={handleClearCart}
            >
              <Trash2 className="w-5 h-5" />
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors font-medium"
            >
              Browse Restaurants
            </button>
          </div>
        )}

        {/* Cart Items */}
        {cartItems.length > 0 && (
          <>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <ItemList items={cartItems} onRemoveItem={handleRemoveItem} />
            </div>

            {/* Cart Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
              
              {/* Item Details */}
              <div className="space-y-3 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{item.card.info.name}</h4>
                      <p className="text-sm text-gray-600">
                        ₹{(item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100).toFixed(2)}
                      </p>
                    </div>
                    <button
                      className="ml-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-pink-600">₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <button 
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-bold text-lg"
                onClick={handleCheckout}
              >
                <CreditCard className="w-6 h-6" />
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
