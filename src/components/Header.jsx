import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import { 
  ShoppingCart, 
  User, 
  Home, 
  Info, 
  Phone, 
  Menu,
  Search,
  Bell,
  Settings,
  LogOut,
  LogIn,
  X,
  Github
} from "lucide-react";

const NavLink = ({ to, icon, text, isActive = false }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
      isActive ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-gray-900'
    }`}
  >
    <span className="text-current">{icon}</span>
    <span className="font-medium">{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text, isActive = false, onClick }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
      isActive ? 'bg-orange-500 text-white' : 'text-gray-900'
    }`}
    onClick={onClick}
  >
    <span className="text-current">{icon}</span>
    <span className="font-medium">{text}</span>
  </Link>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  
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

  const handleLoginToggle = () => {
    setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg" 
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                src={LOGO_URL}
                alt="Logo" 
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
            </div>
            
            {/* Online Status - Desktop */}
            <div className="hidden sm:flex items-center">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                onlineStatus 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                <span className={`w-2 h-2 rounded-full ${onlineStatus ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></span>
                {onlineStatus ? "Online" : "Offline"}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <NavLink to="/" icon={<Home size={18} />} text="Home" isActive />
            <NavLink to="/about" icon={<Info size={18} />} text="About" />
            <NavLink to="/contact" icon={<Phone size={18} />} text="Contact" />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* GitHub Button */}
            <a
              href="https://github.com/GouravSittam/YumYum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-orange-500 transition-colors duration-200 rounded-lg hover:bg-orange-50"
              aria-label="View on GitHub"
            >
              <Github size={20} />
              <span className="hidden xl:inline font-medium">GitHub</span>
            </a>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Bell size={20} />
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                2
              </div>
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
              {cartItems.length > 0 && (
                <div className="absolute -top-1 -right-1 h-5 w-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                  {cartItems.length}
                </div>
              )}
            </Link>

            <div className="w-px h-6 bg-gray-300"></div>

            {/* User Section */}
            {btnNameReact === "Logout" ? (
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {loggedInUser.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <span className="font-medium text-sm hidden xl:inline text-gray-900">{loggedInUser}</span>
                <button 
                  onClick={handleLoginToggle}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLoginToggle}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <LogIn size={18} />
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu-container bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
                      {btnNameReact === "Logout" ? loggedInUser.split(' ').map(n => n[0]).join('').toUpperCase() : "G"}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{btnNameReact === "Logout" ? loggedInUser : "Guest"}</p>
                      <div className={`flex items-center gap-1 text-xs ${
                        onlineStatus ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${onlineStatus ? 'bg-green-400' : 'bg-red-400'}`}></span>
                        {onlineStatus ? "Online" : "Offline"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200 mb-6"></div>

                {/* Mobile Navigation */}
                <div className="flex-1 space-y-2">
                  <MobileNavLink 
                    to="/" 
                    icon={<Home size={20} />} 
                    text="Home" 
                    isActive
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                  <MobileNavLink 
                    to="/about" 
                    icon={<Info size={20} />} 
                    text="About" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                  <MobileNavLink 
                    to="/contact" 
                    icon={<Phone size={20} />} 
                    text="Contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  />

                  <div className="w-full h-px bg-gray-200 my-4"></div>

                  {/* Mobile GitHub Link */}
                  <a 
                    href="https://github.com/GouravSittam/YumYum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Github size={20} />
                    <span className="font-medium">View on GitHub</span>
                  </a>

                  {/* Mobile Cart */}
                  <Link 
                    to="/cart"
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <ShoppingCart size={20} />
                      <span className="font-medium">Shopping Cart</span>
                    </div>
                    <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {cartItems.length} items
                    </div>
                  </Link>

                  {/* Mobile Notifications */}
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Bell size={20} />
                      <span className="font-medium">Notifications</span>
                    </div>
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">2</div>
                  </div>

                  <div className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                  </div>
                </div>

                {/* Mobile Footer Actions */}
                <div className="pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      handleLoginToggle();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      btnNameReact === "Login"
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                  >
                    {btnNameReact === "Login" ? <LogIn size={18} /> : <LogOut size={18} />}
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

export default Header;
