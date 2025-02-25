import React from "react";


const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen bg-[#0B1A2A]" id="home">
      
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 py-16 md:px-16 md:py-24">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#00B6B6]">Expert</span> For Your <br /> Growing Business!
          </h1>
        </div>
       
        <div className="text-xl mt-8 flex space-x-4">
        <p class="inline">
  Zoomster Hub OPC Private Limited is a one-stop solution for entertainment, <br />
  career growth,
  business development, website and application development, <br />pre- to 
  post-production services, 
  and event or celebrity management. The <br/>company  offers seamless OTT technology and exclusive 
  content available <br/>in 193 countries.
</p>

        </div>
      </div>

    
    </section>
  );
};

export default HeroBanner;
