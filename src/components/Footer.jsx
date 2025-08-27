import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Newsletter handler (placeholder)
  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="relative mt-16 md:mt-24 bg-gradient-to-t from-pink-50 to-white border-t border-pink-100">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full pointer-events-none">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C320,80 420,10 1440,40 L1440,100 L0,100 Z"
            className="fill-pink-50"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand & Social */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src={require("../logo/logo red.png")}
                alt="YumYum Logo"
                className="w-10 h-10 rounded-full shadow-md"
              />
              <span className="text-2xl font-bold text-pink-600 font-serif tracking-tight">
                YumYum
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Modern food delivery platform. Discover, order, and enjoy the best
              food in your city—fast, fresh, and easy.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <SocialIcon
                icon={<Facebook size={18} />}
                href="https://www.facebook.com/profile.php?id=100011433522248"
                label="Facebook"
              />
              <SocialIcon
                icon={<Twitter size={18} />}
                href="https://x.com/Gouravv_c"
                label="Twitter"
              />
              <SocialIcon
                icon={<Instagram size={18} />}
                href="https://www.instagram.com/gouravv.c/"
                label="Instagram"
              />
              <SocialIcon
                icon={<Linkedin size={18} />}
                href="https://www.linkedin.com/in/gouravsittam/"
                label="LinkedIn"
              />
              <SocialIcon
                icon={<Github size={18} />}
                href="https://github.com/GouravSittam"
                label="GitHub"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-semibold text-pink-600">
              Navigation
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link to="/" className="footer-link">
                  <HomeIcon /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <InfoIcon /> About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="footer-link">
                  <MenuIcon /> Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">
                  <CartIcon /> Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <PhoneIcon /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-semibold text-pink-600">
              Contact
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <ContactItem
                icon={<MapPin />}
                text="YumYum HQ, Food Street, City, 123456"
              />
              <ContactItem icon={<Phone />} text="+91 7018389596" />
              <ContactItem icon={<Mail />} text="gouravsittam@gmail.com" />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-semibold text-pink-600">
              Newsletter
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Get the latest offers and updates delivered to your inbox.
            </p>
            <form
              className="space-y-3"
              onSubmit={handleNewsletter}
              autoComplete="off"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white border-2 border-pink-100 focus:outline-none focus:border-pink-400 transition-colors duration-300 placeholder-gray-400 text-sm md:text-base"
                  aria-label="Email address"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400">
                  <Mail size={18} />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-100 pt-6 md:pt-8 mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-gray-600 text-sm md:text-base">
            <span>© {new Date().getFullYear()} YumYum. Made with</span>
            <Heart className="w-4 h-4 mx-2 text-pink-500 animate-pulse" />
            <span>by Gourav Chaudhary</span>
          </div>
          <button
            onClick={scrollToTop}
            className="group bg-pink-500 hover:bg-pink-600 text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href, label }) => (
  <a
    href={href}
    className="bg-white p-2 md:p-3 rounded-full hover:bg-pink-500 hover:text-white text-pink-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer inline-block"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    tabIndex={0}
    onClick={(e) => {
      e.stopPropagation();
      window.open(href, "_blank", "noopener,noreferrer");
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter") window.open(href, "_blank", "noopener,noreferrer");
    }}
  >
    {icon}
  </a>
);

// Contact Item Component
const ContactItem = ({ icon, text }) => (
  <li className="flex items-start space-x-2 md:space-x-3 group">
    <div className="text-pink-400 transform group-hover:scale-110 transition-transform duration-300 mt-0.5">
      {React.cloneElement(icon, { size: 18, className: "md:w-5 md:h-5" })}
    </div>
    <span className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300 text-sm md:text-base">
      {text}
    </span>
  </li>
);

// Footer navigation icons
const HomeIcon = () => (
  <span className="mr-2 text-pink-400">
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M3 9.5L12 4l9 5.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" />
      <path d="M9 22V12h6v10" />
    </svg>
  </span>
);
const InfoIcon = () => (
  <span className="mr-2 text-pink-400">
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  </span>
);
const MenuIcon = () => (
  <span className="mr-2 text-pink-400">
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </span>
);
const CartIcon = () => (
  <span className="mr-2 text-pink-400">
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  </span>
);
const PhoneIcon = () => (
  <span className="mr-2 text-pink-400">
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 21 18.91V21z" />
    </svg>
  </span>
);

export default Footer;
