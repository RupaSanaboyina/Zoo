import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0C1A2A] text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 Zoomster Hub OPC Private Limited. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#terms" className="text-sm hover:text-gray-400">Terms & Conditions</a> | 
          <a href="#privacy" className="text-sm hover:text-gray-400 ml-2">Privacy Policy</a> | 
          <a href="#cookies" className="text-sm hover:text-gray-400 ml-2">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

