import React from "react";

const AboutDirector = () => (
  <section className="bg-[#0C1A2A] text-white p-10" id="about-director">
    <h2 className="text-2xl font-bold text-center md:text-4xl md:pl-0">
      About Our Director
    </h2>
    <div className="flex flex-col items-center mt-6 md:flex-row md:justify-center md:items-start">
    <img
  src="./Abinash.jpg"
  alt="Abinash Rout"
  className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
/>

      <p className="mt-6 text-center md:text-left md:pl-8 md:mt-0">
        Abinash Rout, CEO of Zoomster Hub, is a visionary leader driving
        innovation and success through technology and creativity. Abinash Rout, a
        native of Kendujhar, Odisha, is a multifaceted Indian film director{" "}
        <a
          href="https://www.google.com/search?q=abinash+rout+director&oq=Abinash&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIJCAAQRRg5GIAEMgYIARAjGCcyBwgCEC4YgAQyCggDEC4YsQMYgAQyDAgEEAAYQxiABBiKBTIHCAUQABiABDIGCAYQRRg8MgYIBxBFGDzSAQg1Nzk2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ...
        </a>
      </p>
    </div>
  </section>
);

export default AboutDirector;
