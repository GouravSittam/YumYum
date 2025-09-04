import React, { useState, useEffect, useContext, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, User, Home, Info, Phone, X, Menu } from "lucide-react";
import { RootState } from "../Utils/AppStore";
import UserContext, { UserContextType } from "../Utils/UserContext";
import { CartItem } from "../Utils/CartSlices";

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 hover:text-pink-600 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  icon,
  text,
  onClick,
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center space-x-2 py-2 px-4 hover:bg-pink-50 rounded"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const Header: React.FC = () => {
  const [btnNameReact, setBtnNameReact] = useState<string>("Login");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const onlineStatus = true; // Replace with useOnlineStatus() if needed
  const { loggedInUser } = useContext<UserContextType>(UserContext);
  const cartItems = useSelector(
    (store: RootState) => store.cart.items as CartItem[]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (e: Event) => {
      if (
        isMobileMenuOpen &&
        !(e.target as HTMLElement).closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg bg-white/90 backdrop-blur" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={require("../logo/logo red.png")}
            alt="YumYum Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span className="text-2xl font-bold text-pink-600 font-serif tracking-tight">
            YumYum
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" icon={<Home />} text="Home" />
          <NavLink to="/about" icon={<Info />} text="About" />
          <NavLink to="/contact" icon={<Phone />} text="Contact" />
          <NavLink
            to="/cart"
            icon={<ShoppingCart />}
            text={`Cart (${cartItems.length})`}
          />
          <NavLink
            to="/profile"
            icon={<User />}
            text={loggedInUser || "Profile"}
          />
        </nav>
        <button
          className="md:hidden p-2 rounded hover:bg-pink-100"
          onClick={handleMenuToggle}
          aria-label="Open menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mobile-menu-container absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col py-2">
            <MobileNavLink
              to="/"
              icon={<Home />}
              text="Home"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              to="/about"
              icon={<Info />}
              text="About"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              to="/contact"
              icon={<Phone />}
              text="Contact"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              to="/cart"
              icon={<ShoppingCart />}
              text={`Cart (${cartItems.length})`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              to="/profile"
              icon={<User />}
              text={loggedInUser || "Profile"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
