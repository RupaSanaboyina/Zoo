import React, { useRef, useEffect, useState } from "react";

const Team = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const members = [
    {
      name: "Abinash Rout",
      role: "CEO",
      description:
        "Visionary filmmaker, CEO of Zoomster Hub, and founder of Zoomaax Studio, redefining industries.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Nensi Gadhiya",
      role: "Creative Head",
      description:
        "Creative Head at Zoomster Hub, leading innovative projects in E-commerce, Media, and Design.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Rupa",
      role: "Creative Head",
      description:
        "Creative Head at Zoomster Hub, leading innovative projects in E-commerce, Media, and Design.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Aniket",
      role: "Creative Head",
      description:
        "Creative Head at Zoomster Hub, leading innovative projects in E-commerce, Media, and Design.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Priya Sharma",
      role: "Management Head",
      description: "Management Head at Zoomster Hub, driving growth, efficiency, and innovation across teams.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Puja Patra",
      role: "Event & Media PRO",
      description:"Event and Media PRO at Zoomster Hub, excelling in event management, media relations, and strategy.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Natthala Sandhya",
      role: "Talent & Media PRO",
      description:"Talent and Media PRO at Zoomster Hub, specializing in talent management, media relations, and coordination.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Kishore Singh",
      role: "Core Committee",
      description: "Core committee member driving impactful initiatives at Zoomster Hub.",
      image: "https://via.placeholder.com/150",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % members.length);
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * ((activeIndex + 1) % members.length),
        behavior: "smooth"
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, members.length]);

  return (
    <section className="bg-[#0C1A2A] p-10">
      <h2 className="text-3xl text-white font-bold text-center">Meet Our Team</h2>
      <p className="text-center text-gray-400 mt-4">
        This is the team of creative professionals who are passionate about their work and always ready to collaborate with you.
      </p>
      <div
        ref={containerRef}
        className="flex space-x-6 overflow-hidden relative mt-8"
      >
        {members.map((member, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 text-center rounded shadow-md p-6 overflow-hidden bg-white transition-transform duration-300 ${
              index === activeIndex ? "scale-110" : "scale-90 opacity-75"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-gray-200 shadow-md mx-auto"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
            <p className="text-gray-600 font-semibold">{member.role}</p>
            <p className="mt-2 text-gray-700 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-2xl text-white font-semibold">Connect with us to Grow!</p>
        <p className="mt-2 text-gray-400">
          Delivering excellence through Web & App Development, innovative Media PR, engaging OTT streaming, seamless Event & Celebrity Management, and Pro Max—a platform creating opportunities and driving success for businesses and individuals globally.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:underline">Facebook</a>
          <a href="#" className="text-pink-500 hover:underline">Instagram</a>
          <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Team;
