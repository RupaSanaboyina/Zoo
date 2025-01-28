import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompanyUmberalla from './CompanyUmberalla';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 px-6 sm:px-8 flex justify-between items-center fixed top-0 left-0 z-20 transition-all duration-300 drop-shadow-lg ${
        isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      }`}
    >
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <img
          src="/Z_Logo.png"
          alt="Zoomster Logo"
          className="h-12 sm:h-14 w-12 sm:w-14 object-contain rounded-lg shadow-md"
        />
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide hidden sm:block">Zoomster Hub</h1>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden text-white focus:outline-none"
      >
        {/* Custom Hamburger Icon */}
        <div className={`space-y-2`}>
          <div
            className={`w-7 h-1 bg-white transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`w-7 h-1 bg-white transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-7 h-1 bg-white transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Navbar Links */}
      <nav>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex sm:space-x-8 sm:static absolute top-16 left-0 right-0 bg-white sm:bg-transparent transition-all duration-500 ease-in-out transform sm:flex-row flex-col space-y-4 sm:space-y-0 sm:p-0 p-6 shadow-md sm:shadow-none ${
            isMenuOpen ? 'animate-slide-in' : ''
          }`}
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Our Services' },
            { to: '/clientele', label: 'Our Clients' },
            { to: '/team', label: 'Our Team' },
            { to: '/about-director', label: 'About Director' },
            { to: '/contact-us', label: 'Contact Us' },
          ].map((item, index) => (
            <li
              key={index}
              className={`${
                isScrolled || isMenuOpen ? 'text-black' : 'text-white'
              } hover:text-gray-500 transition-opacity duration-500 delay-${index * 100}`}
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
          <li
            className={`${
              isScrolled || isMenuOpen ? 'text-black' : 'text-white'
            } hover:text-gray-500 transition-opacity duration-500`}
          >
            <CompanyUmberalla />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
