import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCart, User, Home, Info, Phone } from "lucide-react"; // Importing icons

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isScrolled, setIsScrolled] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              className="w-40 h-40 object-contain transition-transform duration-300 hover:scale-105" 
              src={LOGO_URL} 
              alt="Logo" 
            />
          </div>

          {/* Navigation Section */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-6">
              {/* Online Status Indicator */}
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
                <span className={`w-3 h-3 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm font-medium text-gray-600">
                  {onlineStatus ? "Online" : "Offline"}
                </span>
              </div>

              {/* Navigation Links */}
              <NavLink to="/" icon={<Home size={18} />} text="Home" />
              <NavLink to="/about" icon={<Info size={18} />} text="About" />
              <NavLink to="/contact" icon={<Phone size={18} />} text="Contact" />
              
              {/* Cart Button */}
              <Link 
                to="/cart" 
                className="flex items-center space-x-2 px-4 py-2 bg-pink-50 rounded-full hover:bg-pink-100 transition-colors duration-300"
              >
                <ShoppingCart size={18} className="text-pink-500" />
                <span className="font-medium text-pink-600">
                  {cartItems.length} items
                </span>
              </Link>

              {/* User Section */}
              <div className="flex items-center space-x-4">
                <button
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    btnNameReact === "Login"
                      ? "bg-pink-500 text-white hover:bg-pink-600"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                  onClick={() => {
                    setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                  }}
                >
                  {btnNameReact}
                </button>
                
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full">
                  <User size={18} className="text-gray-600" />
                  <span className="font-medium text-gray-700">{loggedInUser}</span>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button - You can implement a mobile menu here */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// NavLink Component
const NavLink = ({ to, icon, text }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
  >
    <span className="text-gray-600">{icon}</span>
    <span className="font-medium text-gray-700">{text}</span>
  </Link>
);

export default Header;