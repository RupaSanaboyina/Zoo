import React from "react";

const Card = ({ icon, title, description, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="h-20 w-19" />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-black mb-4">{description}</p>
      <button className="bg-[#0C1A2A] text-white py-2 px-4 rounded-lg hover:bg-[#00B6B6]">
        {buttonText}
      </button>
    </div>
  );
};

const Companyapps = () => {
  const cardData = [
    {
      icon: "/Zoomaax Tv Logo.jpeg", 
      title: "Zoomaax Tv",
      description:
        "Zoomaax TV is a comprehensive entertainment platform offering a diverse range of content, including serials, series, movies, reality shows, and news. It also features a dedicated live streaming service called Promaax. The platform will be accessible in 190+ countries and support 30+ languages, ensuring a seamless viewing experience for a global audience.",
      buttonText: "Website",
    },
    {
      icon: "/Zoomaax News.png", 
      title: "Zoomaax News",
      description:
        "Zoomaax News is a comprehensive news platform delivering updates across all religions, as well as national and international news. It covers a wide range of categories, including sports, crime, politics, cybersecurity, and entertainment, ensuring timely and reliable information for a global audience.",
      buttonText: "Website",
    },
    {
        icon: "/Zoomaax Studio.png", 
        title: "Zoomaax Studio",
        description:
          "Zoomaax Studio is a dynamic platform offering a wide range of services, including film and event production, digital marketing, media PR, brand promotions, and comprehensive pre-to-post production solutions. With a commitment to excellence, we cater to diverse creative and commercial needs, delivering high-quality results across industries.",
        buttonText: "Website",
      },
      {
        icon: "/Zoomaar.png", 
        title: "Zoomaar",
        description:
          " ZoomaaR is a dynamic e-commerce platform offering a wide range of clothing, ornaments, and more. It provides a seamless shopping experience with diverse product selections to meet the needs of a global audience.",
        buttonText: "Website",
      },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white ">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default Companyapps;
