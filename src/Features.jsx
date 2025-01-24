import React from 'react';

const Features = () => {
  return (
    <section className=" p-6 bg-[#0C1A2A]  text-white">
      <h5 className="text-3xl font-semibold flex justify-center mb-4">Packed with Thousands of Features</h5>
      <div className="flex justify-evenly items-center mt-2">
        {/* Left side with large 100% */}
        <div>
          <h1 className="text-6xl font-bold">100%</h1>
        </div>

        {/* Right side with list and heading */}
        <div>
          
          <ul className="space-y-2 text-gray-200">
            <li>Designed for Creators</li>
            <li>User-Friendly Design</li>
            <li>Affordable Pricing</li>
            <li>Customizable Themes</li>
            <li>24/7 Support</li>
            <li>Risk-Free Trial</li>
            <li>Endless Possibilities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
