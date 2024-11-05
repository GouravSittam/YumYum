import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white">
      {/* Curved separator */}
      <div className="relative">
        <svg
          className="w-full h-24 text-white fill-current"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C280,100 660,0 1440,50 L1440,100 L0,100 Z"
            className="fill-current text-pink-500"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Foodie's Hub</h3>
            <p className="text-pink-100">
              Discover the best food and drinks in your area. We make it easy to satisfy your cravings, 
              delivering delicious possibilities every day.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="#" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Instagram size={20} />} href="#" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" />
              <SocialIcon icon={<Youtube size={20} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-pink-100 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-pink-100">
                <MapPin className="mr-3 h-5 w-5" />
                <span>123 Food Street, Foodie City, FC 12345</span>
              </li>
              <li className="flex items-center text-pink-100">
                <Phone className="mr-3 h-5 w-5" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center text-pink-100">
                <Mail className="mr-3 h-5 w-5" />
                <span>info@foodieshub.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-pink-100 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-pink-300/30 focus:outline-none focus:border-white placeholder-pink-200 text-white"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2 bg-white text-pink-500 rounded-lg font-semibold hover:bg-pink-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-300/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-pink-100 text-center md:text-left mb-4 md:mb-0">
              © 2024 Foodie's Hub. Made with <Heart className="inline-block w-4 h-4 mx-1 text-red-400" /> by Gourav
            </p>

            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="group bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 border border-pink-300/30"
            >
              <ArrowUp className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href }) => (
  <a 
    href={href}
    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 border border-pink-300/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;