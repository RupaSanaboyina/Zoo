// import React from "react";

// const LogoSlider = () => {
//   const logos = [
//     "/logo1.png",
//     "/logo2.png",
//     "/brand_logo.png",
//     "/logo4.png",
//   ];

//   return (
//     <div className="bg-[#0C1A2A] py-10">
     
//       <h2 className="text-3xl font-bold text-white text-center mb-8">
//         Market Leaders Choose Us
//       </h2>

     
//       <div className="relative overflow-hidden w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
//         <div
//           className="flex animate-loop-scroll"
//           style={{ width: "200%" }} 
//         >
//           {[...logos, ...logos].map((imageUrl, index) => (
//             <img
//               key={index}
//               src={imageUrl}
//               alt={`Logo ${index + 1}`}
//               className="h-20 w-auto mx-4"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoSlider;
import React from "react";

const LogoSlider = () => {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/brand_logo.png",
    "/logo4.png",
  ];

  return (
    <div className="bg-[#0C1A2A] py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Market Leaders Choose Us
      </h2>

      <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Scrolling container */}
        <div className="flex w-max min-w-[200%] animate-scroll">
          {/* Duplicate the logos for infinite looping */}
          {[...logos, ...logos].map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Logo ${index + 1}`}
              className="h-20 w-auto mx-4 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;


