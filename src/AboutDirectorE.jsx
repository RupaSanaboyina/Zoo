import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchatGhost } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

const AboutDirectorE = () => (
  <section className="bg-[#0C1A2A] text-white p-20 " id="aboutdirector">
    <h2 className="text-2xl font-bold text-center md:text-4xl md:pl-0">
      About Our Director
    </h2>
    <div className="flex flex-col items-center mt-6 md:flex-row md:justify-center md:items-start">
      <div className="flex flex-col items-center">
   <img
  src="./Abinash.jpg"
  alt="Abinash Rout"
  className="w-[50px] h-[100px] sm:w-[40px] sm:h-[100px] md:w-[70px] md:h-[120px] lg:w-[100px] lg:h-[50px] xl:w-[400px] xl:h-[200px] rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
/>



        {/* Social Media Links */}
        <div className="flex mt-4 space-x-4">
          <a href="https://www.facebook.com/directorabinashrout" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/iamabinash_rout" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/abinash-rout-269376264/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://www.google.com/search?q=Abinash+Rout" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-700">
            <GrGoogle/>
          </a>
        </div>
      </div>
      <p className="mt-6 text-center md:text-left md:pl-8 md:mt-0">
        Abinash Rout, a native of Kendujhar, Odisha, has emerged as a dynamic force in the Indian entertainment industry. Based in Mumbai and Hyderabad, he has carved a niche as a multifaceted filmmaker, producer, and visionary entrepreneur. With a career spanning numerous domains, Abinash has directed over 100 TV commercials, web series, music videos, and serials, earning accolades such as Best Entrepreneur, Best Director, and Best Debut Assistant Director. His journey from a budding director to a trailblazer exemplifies perseverance and innovation, making him a respected figure in the competitive film circuits of Mumbai and Hyderabad.
        
        As the CEO of Zoomster Hub OPC Private Limited, Abinash leads an enterprise that has diversified into OTT platforms, film production, e-commerce, and digital media. He spearheads Zoomaax TV, an OTT platform set to launch in over 190 countries, revolutionizing global entertainment consumption. His production house, Zoomaax Studio, focuses on nurturing fresh talent, offering opportunities for newcomers in the industry. Abinash’s visionary approach has expanded Zoomster Hub’s reach beyond India to countries like South Korea and Dubai, with plans to go global, ensuring the brand becomes a household name worldwide.
        
        Abinash's journey has been one of resilience and innovation. Despite facing challenges early in his career, he founded Zoom Bollywood and consolidated all platforms under Zoomster Hub OPC Pvt Ltd. His dedication to empowering emerging talent and creating high-quality content reflects his commitment to excellence. His latest endeavor, ZoomaaR, an e-commerce platform, further showcases his entrepreneurial spirit and versatility. Abinash's ability to combine creativity with business acumen has redefined standards in the entertainment and e-commerce industries, inspiring future generations to dream big and work hard.
      </p>
    </div>

    <div className="mt-10">
      <h3 className="text-xl font-bold text-center md:text-2xl">Positive Key Highlights</h3>
      <ul className="list-disc list-inside mt-4 text-center md:text-left md:pl-8">
        <li>Directed and produced 100+ TV commercials, web series, and music videos.</li>
        <li>CEO of Zoomster Hub OPC Pvt Ltd, with operations in South Korea, Dubai, and expanding globally.</li>
        <li>Founder of Zoomaax Studio, dedicated to nurturing fresh talent in the entertainment industry.</li>
        <li>Launched Zoomaax TV, an OTT platform reaching 190+ countries.</li>
        <li>Awarded for excellence in direction and entrepreneurship.</li>
        <li>Innovative thinker, combining creativity with strategic business leadership.</li>
      </ul>
    </div>

    <div className="mt-10 text-center">
      <h3 className="text-xl font-bold md:text-2xl">Inspirational Quote from Abinash Rout</h3>
      <p className="italic mt-4">"Success is not the destination; it’s the journey of perseverance, innovation, and belief in your dreams. With dedication and vision, anything is possible."</p>
    </div>

    <div className="mt-5 text-center">
      <p>Abinash Rout’s story is a testament to the power of resilience and creativity, revolutionizing the entertainment landscape and leaving an inspiring legacy for generations to come.</p>
    </div>
  </section>
);

export default AboutDirectorE;
