import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <h2 className="text-xl font-semibold mb-2">Yum Yum Restaurant & Cafe</h2>

      <h3 className="text-lg font-medium mt-4">Get in Touch</h3>
      <p className="mb-4">If you have any questions, feedback, or inquiries, feel free to reach out to us!</p>

      <h3 className="text-lg font-medium">Phone</h3>
      <p className="mb-2">+91 9876543210</p>

      <h3 className="text-lg font-medium">Email</h3>
      <p className="mb-4">
        <a href="mailto:info@yumyumcafe.com" className="text-blue-500 hover:underline">info@yumyumcafe.com</a>
      </p>

      <h3 className="text-lg font-medium">Follow Us</h3>
      <p className="mb-4">
        Facebook: <a href="https://www.facebook.com/Yum-Yum-Restaurant-and-Cafe-10991667880184/" className="text-blue-500 hover:underline">@yummyumcafe</a><br />
        Instagram: <a href="https://www.instagram.com/yummyumcafe/" className="text-blue-500 hover:underline">@yummyumcafe</a><br />
        Twitter: <a href="https://twitter.com/yummyumcafe" className="text-blue-500 hover:underline">@yummyumcafe</a>
      </p>

      <h3 className="text-lg font-medium">Visit Us</h3>
      <p className="mb-4">
        123 Flavor Street,<br />
        Food Town, FT 12345<br />
        Country
      </p>

      <h3 className="text-lg font-medium">Contact Form</h3>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input id="name" name="name" required className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input id="email" name="email" type="email" required className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea id="message" name="message" required rows="4" className="border border-gray-300 rounded-md p-2 w-full"></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;