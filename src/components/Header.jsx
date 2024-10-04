import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  console.log("Header Render"); 

  const onlineStatus=useOnlineStatus();


  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is (btnamereact) =>called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact us</Link>
          </li>
          <li>
          <Link to="/cart">Cart</Link>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
