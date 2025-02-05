import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0C1A2A] text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>© 2025 Zoomster Hub OPC Private Limited. All Rights Reserved.</p>
        <div className="mt-4">
          <Link to="/terms-and-conditions" className="text-sm hover:text-gray-400">Terms & Conditions</Link> | 
          <Link to="/privacy-policy" className="text-sm hover:text-gray-400 ml-2">Privacy Policy</Link> | 
          <Link to="/cookies" className="text-sm hover:text-gray-400 ml-2">Cookies</Link> |
          <Link to="/disclaimer" className="text-sm hover:text-gray-400 ml-2">Disclaimer</Link> |
          <Link to="/feedback" className="text-sm hover:text-gray-400 ml-2">Feedback</Link>
        </div>
        <div className="mt-6">
          <a 
            href="https://inquiry.zoomsterhub.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#00B6B6] hover:bg-[#027D84] text-white  py-2 px-4 rounded-lg inline-block"
          >
            Need Our Service? Fill This Form
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
