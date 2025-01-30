import React from "react";

const AddressCards = () => {
  const addresses = [
    {
      title: "Telangana",
      address: "Miyapur, Hyderabad, 500032",
      bgColor: "bg-blue-100",
    },
    {
      title: "Tamil Nadu",
      address: "Anna Nagar, Chennai, 600040",
      bgColor: "bg-green-100",
    },
    {
      title: "Kerala",
      address: "MG Road, Kochi, 682016",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Gujarat",
      address: "Gandhinagar, near highway, Ahmedabad, 382002",
      bgColor: "bg-red-100",
    },
    {
      title: "Haryana",
      address: "Huda City Centre, Gurugram, 122009",
      bgColor: "bg-purple-100",
    },
    {
      title: "Dubai",
      address: "Downtown Standard Chartered Tower, Level 5, Emaar Square, Dubai, UAE, 500001",
      bgColor: "bg-pink-100",
    },
    {
      title: "South Korea",
      address: "Busan, Gangnam, 06000",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <div className="bg-[#0C1A2A] flex flex-wrap justify-center items-center gap-4  px-4 pt-8 pb-0">
      {addresses.map((item, index) => (
        <div
          key={index}
          className={`${item.bgColor} w-80 h-40 p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-center`}
        >
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700">{item.address}</p>
        </div>
      ))}
    </div>
  );
};

export default AddressCards;
