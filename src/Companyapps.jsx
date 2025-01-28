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
      icon: "/Zoomaax Tv Logo.jpeg", // Replace with the actual path to the icon
      title: "Zoomaax Tv",
      description:
        "Our soon-to-launch e-commerce platform, offering a unique shopping experience that combines entertainment and commerce. With a curated selection of products and exclusive deals, Zoomaar is set to become the ultimate shopping destination for entertainment enthusiasts.",
      buttonText: "Website",
    },
    {
      icon: "/Zoomaax News.png", // Replace with the actual path to the icon
      title: "Zoomaax News",
      description:
        "Our events and production division, delivering exceptional experiences that leave a lasting impact. From live concerts to corporate events, Zoomaax Studios is dedicated to creating unforgettable experiences.",
      buttonText: "Website",
    },
    {
        icon: "/Zoomaax Studio.png", // Replace with the actual path to the icon
        title: "Zoomaax Studio",
        description:
          "Our events and production division, delivering exceptional experiences that leave a lasting impact. From live concerts to corporate events, Zoomaax Studios is dedicated to creating unforgettable experiences.",
        buttonText: "Website",
      },
      {
        icon: "/Zoomaar.png", // Replace with the actual path to the icon
        title: "Zoomaar",
        description:
          "Our events and production division, delivering exceptional experiences that leave a lasting impact. From live concerts to corporate events, Zoomaax Studios is dedicated to creating unforgettable experiences.",
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
