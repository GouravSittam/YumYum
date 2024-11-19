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
    <div className="bg-gradient-to-br from-white to-green-50 min-h-screen py-12 mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Contact Information Section */}
          <div className="w-full md:w-1/2 bg-pink-400 text-white p-8">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <h2 className="text-2xl font-semibold mb-4">Yum Yum Restaurant & Cafe</h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6" />
                <a href="mailto:info@yumyumcafe.com" className="hover:underline">
                  info@yumyumcafe.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6" />
                <span>123 Flavor Street, Food Town, FT 12345</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <a href="https://www.facebook.com/Yum-Yum-Restaurant-and-Cafe-10991667880184/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-7 h-7 hover:text-blue-300 transition-colors" />
              </a>
              <a href="https://www.instagram.com/yummyumcafe/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-7 h-7 hover:text-pink-300 transition-colors" />
              </a>
              <a href="https://twitter.com/yummyumcafe" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-7 h-7 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
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