import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-br from-white to-green-50 min-h-screen py-8 md:py-12 mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Information Section */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-pink-400 to-pink-600 text-white p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Contact Us</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Yum Yum Restaurant & Cafe</h2>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-sm md:text-base">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                <a href="mailto:info@yumyumcafe.com" className="hover:underline text-sm md:text-base">
                  info@yumyumcafe.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base">123 Flavor Street, Food Town, FT 12345</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Yum-Yum-Restaurant-and-Cafe-10991667880184/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <Facebook className="w-6 h-6 md:w-7 md:h-7 hover:text-blue-300 transition-colors" />
              </a>
              <a href="https://www.instagram.com/yummyumcafe/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <Instagram className="w-6 h-6 md:w-7 md:h-7 hover:text-pink-300 transition-colors" />
              </a>
              <a href="https://twitter.com/yummyumcafe" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <Twitter className="w-6 h-6 md:w-7 md:h-7 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 md:py-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 font-medium text-lg transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;