import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CompanyUmberalla from './CompanyUmberalla';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set threshold when background color changes
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isClientelePage = [
    "/clientele",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookies",
    "/disclaimer",
    "/feedback",
    "/AppDevelopment",
    "/WebDesigning",
    "/OttTv",
    "/DigitalMedia",
    "/PrePro",
    "/EventManagement",
  ].includes(location.pathname);

  return (
    <header
      className={`w-full py-4 px-6 sm:px-8 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 drop-shadow-lg ${
        isScrolled
          ? 'bg-white text-[#0C1A2A]'  // When scrolled, background white and text color #0C1A2A
          : isClientelePage
          ? 'bg-[#0C1A2A] text-white' // For specific pages like "/clientele"
          : 'bg-transparent text-white'
      }`}
    >
      <div className="flex items-center space-x-4">
        <img
          src="/z.png"
          alt="Zoomster Logo"
          className="h-12 sm:h-14 w-12 sm:w-14 object-contain rounded-lg shadow-md"
        />
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide hidden sm:block">Zoomster Hub</h1>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden focus:outline-none"
      >
        <div className="space-y-2">
          <div className={`w-7 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-7 h-1 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-7 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      <nav>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex sm:space-x-8 sm:static absolute top-16 left-0 right-0 bg-[#0C1A2A] sm:bg-transparent transition-all duration-500 ease-in-out transform sm:flex-row flex-col space-y-4 sm:space-y-0 sm:p-0 p-6 shadow-md sm:shadow-none`}
        >
          <li className="hover:text-[#00B6B6] transition-opacity duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#00B6B6] transition-opacity duration-500">
            <CompanyUmberalla />
          </li>
          {[
            { to: '/services', label: 'Our Services' },
            { to: '/clientele', label: 'Our Clients' },
            { to: '/team', label: 'Our Team' },
            { to: '/aboutdirector', label: 'About Director' },
            { to: '/contact-us', label: 'Contact Us' },
          ].map((item, index) => (
            <li
              key={index}
              className="hover:text-[#00B6B6] transition-opacity duration-500"
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
