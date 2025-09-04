import React from 'react';
import { Link } from 'react-router-dom';
import {LOGO_URL} from '../Utils/constants.jsx';

const links = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
    {
        title: 'Cart',
        href: '/cart',
    },
    {
        title: 'Help',
        href: '#',
    },
    {
        title: 'Privacy',
        href: '#',
    },
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-100 py-16 mt-20">
            <div className="mx-auto max-w-5xl px-6">
                {/* Logo Section */}
                <Link
                    to="/"
                    aria-label="go home"
                    className="mx-auto block w-fit mb-8">
                    <img 
                        src={LOGO_URL} 
                        alt="YumYum Logo" 
                        className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="my-8 flex flex-wrap justify-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className="text-gray-600 hover:text-orange-500 block duration-150 font-medium">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>

                {/* Social Media Links */}
                
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {/* GitHub */}
                    <a
                        href="https://github.com/GouravSittam"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-600 hover:text-orange-500 block transition-colors duration-200">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                    </a>

                    {/* Twitter/X */}
                    <a
                        href="https://x.com/Gouravv_c"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-gray-600 hover:text-orange-500 block transition-colors duration-200">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/gouravsittam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-600 hover:text-orange-500 block transition-colors duration-200">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/share/1FNBxJqc9y/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-gray-600 hover:text-orange-500 block transition-colors duration-200">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/gouravv.c/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-gray-600 hover:text-orange-500 block transition-colors duration-200">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </a>

                    {/* YouTube */}
                    {/* <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="text-gray-600 hover:text-orange-500 block transition-colors duration-200">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                        </svg>
                    </a> */}

                    {/* TikTok */}
                    {/* <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="text-gray-600 hover:text-orange-500 block transition-colors duration-200">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
                        </svg>
                    </a> */}
                </div>

                {/* Scroll to Top Button */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={scrollToTop}
                        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                        aria-label="Scroll to top"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

                {/* Copyright */}
                <div className="text-center space-y-2">
                    <span className="text-gray-600 block text-sm">
                        {new Date().getFullYear()} YumYum - Food Delivery App. All rights reserved.
                    </span>
                    <span className="text-gray-500 block text-xs">
                        Made with by Gourav Chaudhary
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;