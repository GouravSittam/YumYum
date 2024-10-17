import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold text-pink-800">About Us</h2>
          <p className="mt-2 text-pink-700">
            We are dedicated to providing innovative solutions and exceptional service to our customers.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-pink-800">Quick Links</h2>
          <ul className="mt-2 text-pink-700">
            <li><a href="/" className="hover:underline ">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-pink-800">Newsletter</h2>
          <p className="mt-2 text-pink-700">
            Stay updated with our latest news and offers.
          </p>
          <form className="mt-4 flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l border border-pink-300"
            />
            <button type="submit" className="bg-pink-500 p-2 rounded-r text-white hover:bg-pink-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26c.59.32 1.28.32 1.86 0L21 8m-9 4.5V21m-9-13l3.3 5.9M21 21V8m0 0l-3.3 5.9"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-pink-700">
        &copy; 2024 Your Company. All rights reserved.
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://github.com/GouravSittam"  className="text-pink-700 hover:text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.84 8.16 6.76 9.49.5.09.69-.22.69-.49 0-.24-.01-.87-.01-1.71-2.76.6-3.35-1.34-3.35-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.91 1.56 2.38 1.11 2.96.85.09-.66.36-1.11.64-1.37-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.6 9.6 0 012.5-.34c.85 0 1.7.11 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.69-4.57 4.94.37.32.69.95.69 1.92 0 1.39-.01 2.52-.01 2.87 0 .27.18.59.7.49a9.96 9.96 0 006.76-9.49c0-5.5-4.46-9.96-9.96-9.96z" />
          </svg>
        </a>
        <a href="https://x.com/Gouravv_c" className="text-pink-700 hover:text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M22.46 6c-.77.35-1.6.59-2.46.69.88-.52 1.56-1.34 1.88-2.32-.82.48-1.73.83-2.7 1.02-.77-.83-1.87-1.35-3.08-1.35-2.33 0-4.21 1.89-4.21 4.22 0 .33.04.65.11.96C7.69 8.1 4.07 6.13 1.64 3.16c-.36.61-.57 1.32-.57 2.08 0 1.44.73 2.71 1.85 3.46-.68-.02-1.32-.21-1.88-.52v.05c0 2.02 1.44 3.71 3.36 4.09-.35.1-.71.15-1.08.15-.27 0-.53-.03-.78-.07.53 1.66 2.08 2.87 3.92 2.91-1.44 1.13-3.25 1.8-5.22 1.8-.34 0-.67-.02-1-.06 1.86 1.2 4.07 1.91 6.44 1.91 7.73 0 11.97-6.4 11.97-11.97 0-.18-.01-.36-.02-.54.82-.59 1.53-1.33 2.1-2.17z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/gouravv.c/" className="text-pink-700 hover:text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M12 2.163c-3.19 0-3.584.012-4.846.07-1.26.057-2.12.25-2.86.532a5.919 5.919 0 00-2.092 1.287A5.919 5.919 0 00.533 6.576c-.283.74-.475 1.6-.532 2.86C0 11.7.012 12.095.012 15.283c0 3.19-.012 3.584-.07 4.846-.057 1.26-.25 2.12-.532 2.86a5.919 5.919 0 01-1.287 2.092A5.919 5.919 0 012.422 24c.74.283 1.6.475 2.86.532 1.261.057 1.656.07 4.846.07 3.19 0 3.584-.012 4.846-.07 1.26-.057 2.12-.25 2.86-.532a5.919 5.919 0 002.092-1.287 5.919 5.919 0 001.287-2.092c.283-.74.475-1.6.532-2.86.057-1.261.07-1.656.07-4.846 0-3.19-.012-3.584-.07-4.846-.057-1.26-.25-2.12-.532-2.86a5.919 5.919 0 00-1.287-2.092A5.919 5.919 0 0122.425 2c-.74-.283-1.6-.475-2.86-.532-1.261-.057-1.656-.07-4.846-.07zm0 1.697c3.16 0 3.53.012 4.785.07 1.173.053 1.81.25 2.228.417.54.21.92.46 1.32.86.4.4.65.78.86 1.32.166.418.363 1.055.417 2.228.058 1.255.07 1.625.07 4.785s-.012 3.53-.07 4.785c-.053 1.173-.25 1.81-.417 2.228a4.063 4.063 0 01-.86 1.32 4.063 4.063 0 01-1.32.86c-.418.166-1.055.363-2.228.417-1.255.058-1.625.07-4.785.07s-3.53-.012-4.785-.07c-1.173-.053-1.81-.25-2.228-.417a4.063 4.063 0 01-1.32-.86 4.063 4.063 0 01-.86-1.32c-.166-.418-.363-1.055-.417-2.228-.058-1.255-.07-1.625-.07-4.785s.012-3.53.07-4.785c.053-1.173.25-1.81.417-2.228.21-.54.46-.92.86-1.32.4-.4.78-.65 1.32-.86.418-.166 1.055-.363 2.228-.417 1.255-.058 1.625-.07 4.785-.07zm0 3.425a5.137 5.137 0 100 10.274 5.137 5.137 0 000-10.274zm0 8.484a3.347 3.347 0 110-6.694 3.347 3.347 0 010 6.694zm6.406-9.925a1.196 1.196 0 110-2.392 1.196 1.196 0 010 2.392z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100011433522248" className="text-pink-700 hover:text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387v-8.043H5.897V12h2.308V9.413c0-2.28 1.343-3.539 3.396-3.539.979 0 2 .177 2 .177v2.209h-1.127c-1.11 0-1.456.691-1.456 1.4V12h2.478l-.396 3.343h-2.082V24C20.562 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
