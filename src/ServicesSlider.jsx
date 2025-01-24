import React, { useState } from 'react';

const ServicesSlider = () => {
  const services = [
    {
      name: "Digital Media PR",
      imageUrl: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg",
      text: "We specialize in enhancing brand visibility and credibility through strategic digital campaigns, impactful storytelling, media coverage, and influencer collaborations, connecting brands with their audience effectively in the digital landscape."
    },
    {
      name: "Pre-Post Production",
      imageUrl: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg",
      text: "We offer end-to-end solutions for pre and post-production, including planning, scripting, casting, filming, editing, sound design, visual effects, and color grading, ensuring high-quality, impactful content creation."
    },
    {
      name: "App Development",
      imageUrl: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg",
      text: "App development crafts tailored solutions for e-commerce, gaming, and cosmetics industries, emphasizing user-friendly design, seamless functionality, and innovative features to boost engagement, enhance experiences, and drive business growth."
    },
    {
      name: "OTT TV Platform",
      imageUrl: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg",
      text: "We are launching a cutting-edge OTT TV platform that will deliver seamless streaming of movies, series, live sports, news, and exclusive content in over 193 countries and 30+ languages, offering a premium entertainment experience globally."
    },
    {
      name: "Event & Celebrity Management",
      imageUrl: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg",
      text: "Event and Celebrity Management ensures seamless event execution, strategic planning, and impactful celebrity appearances, enhancing brand visibility, audience engagement, and meaningful connections for memorable and successful experiences."
    },
    {
      name: "Web Designing",
      imageUrl: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg",
      text: "Web designing combines creativity and functionality to craft visually appealing, responsive websites. It focuses on layout, color schemes, and usability, ensuring seamless navigation and an engaging user experience across all devices."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of services per page

  const handleNext = () => {
    if (currentIndex + itemsPerPage < services.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <section id="services" className="py-16 px-8 bg-[#0C1A2A]">
      <h2 className="text-3xl font-bold text-white text-center">Our Services at Zoomster Hub</h2>
      
      <div className="relative mt-8 flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          &lt;
        </button>

        <div className="flex gap-6">
          {services.slice(currentIndex, currentIndex + itemsPerPage).map((service, index) => (
            <div
              key={index}
              className="w-90 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <a href="#">
                <img className="rounded-t-lg" src={service.imageUrl} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.text}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-cyan rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Show more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ServicesSlider;
