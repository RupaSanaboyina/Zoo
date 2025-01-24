import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      text: "Intuitive design and features!",
      video: "/review1.webp",
    },
    {
      text: "Essential tool for business!",
      video: "/review2.webp",
    },
    {
      text: "Seamless integration and support!",
      video: "/review3.webp",
    },
  ];

  return (
    <section className="bg-[#0C1A2A]  item-center p-10">
      <h2 className="text-3xl text-white font-bold text-center">
        What Users Say About Zoomster Hub
      </h2>
      <div className="grid grid-cols-1 item-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded shadow">
            <p>{review.text}</p>
            <img src={review.video} alt=""/>
             
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
