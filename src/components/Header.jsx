import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  console.log("Header Render"); 

  const onlineStatus=useOnlineStatus();

  const {loggedInUser}=useContext(UserContext);
  console.log(loggedInUser);

  //subscribing to the store using a selector
  const cart=useSelector((store)=>store.cart.items)




  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is (btnamereact) =>called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">
            Online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2">
          <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
          <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-3  font-bold text-xl">
          <Link to="/cart">Cart(0 items)</Link>
          </li>
          <button
            className="btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
