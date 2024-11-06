import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCart, User, Home, Info, Phone, X, Menu } from "lucide-react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu toggle
  const handleMenuToggle = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-2">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              className="w-20 h-25 md:w-28 md:h-28 object-contain transition-transform duration-300 hover:scale-105" 
              src={LOGO_URL}
              alt="Logo" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
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
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={handleMenuToggle}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mobile-menu-container bg-white border-t shadow-lg">
            <div className="px-4 py-2">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2">
                <MobileNavLink 
                  to="/" 
                  icon={<Home size={18} />} 
                  text="Home" 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <MobileNavLink 
                  to="/about" 
                  icon={<Info size={18} />} 
                  text="About" 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <MobileNavLink 
                  to="/contact" 
                  icon={<Phone size={18} />} 
                  text="Contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Mobile Cart Link */}
                <Link 
                  to="/cart" 
                  className="flex items-center justify-between px-4 py-3 bg-pink-50 rounded-lg hover:bg-pink-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <ShoppingCart size={18} className="text-pink-500" />
                    <span className="font-medium text-pink-600">Cart</span>
                  </div>
                  <span className="bg-pink-200 px-2 py-1 rounded-full text-sm font-medium text-pink-700">
                    {cartItems.length}
                  </span>
                </Link>

                {/* Mobile User Section */}
                <div className="flex flex-col space-y-2 pt-2 border-t">
                  <div className="flex items-center space-x-2 px-4 py-3 bg-gray-100 rounded-lg">
                    <User size={18} className="text-gray-600" />
                    <span className="font-medium text-gray-700">{loggedInUser}</span>
                  </div>
                  <button
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      btnNameReact === "Login"
                        ? "bg-pink-500 text-white hover:bg-pink-600"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                    onClick={() => {
                      setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {btnNameReact}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, icon, text }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
  >
    <span className="text-gray-600">{icon}</span>
    <span className="font-medium text-gray-700">{text}</span>
  </Link>
);

// Mobile NavLink Component
const MobileNavLink = ({ to, icon, text, onClick }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
    onClick={onClick}
  >
    <span className="text-gray-600">{icon}</span>
    <span className="font-medium text-gray-700">{text}</span>
  </Link>
);

export default Header;