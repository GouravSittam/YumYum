import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  // If no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called on initial render (just once)
  // If dependency array is (btnNameReact) => called every time btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className=" flex justify-between items-center bg-gradient-to-r from-pink-100 to-pink-200 shadow-lg p-4">
      <div className="logo-container">
        <img className="w-56 rounded-full shadow-md" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6 text-lg font-semibold text-gray-700">
          <li className="px-2">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 hover:text-pink-500 transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:text-pink-500 transition-colors duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 hover:text-pink-500 transition-colors duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 font-bold text-xl hover:text-pink-500 transition-colors duration-300">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="ml-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold text-gray-700">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;