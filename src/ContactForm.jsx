import React from "react";

const ContactForm = () => (
  <section className="bg-[#0C1A2A] from-gray-900 to-purple-900 text-white p-10 min-h-screen flex flex-col justify-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
      <p className="mb-6 text-lg">
        Explore how we’ve helped businesses achieve their next milestones.
      </p>
     
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Enter name*"
          className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
        />
        <input
          type="text"
          placeholder="Business Name"
          className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
        />
        <input
          type="email"
          placeholder="Email*"
          className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
        />
        <textarea
          placeholder="Brief Challenge Description"
          className="col-span-2 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="col-span-2 bg-purple-600 py-2 rounded text-white font-semibold hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
