import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    contactNumber: "",
    description: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setFormStatus("Please fill out all required fields.");
      return;
    }

    setFormStatus("Thank you for reaching out! We will get back to you soon.");
    setFormData({
      name: "",
      businessName: "",
      email: "",
      contactNumber: "",
      description: "",
    });
  };

  return (
    <section className="bg-[#0C1A2A] from-gray-900 to-purple-900 text-white p-2 sm:p-10  flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
          Get in Touch
        </h2>
        <p className="mb-6 text-base sm:text-lg text-center sm:text-left">
          Explore how we’ve helped businesses achieve their next milestones.
        </p>

        {formStatus && (
          <div className="text-center mb-4 text-lg text-green-400">{formStatus}</div>
        )}

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name*"
            className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
            required
          />
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
            required
          />
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="col-span-1 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief Challenge Description"
            className="col-span-1 md:col-span-2 bg-transparent border border-gray-400 rounded p-3 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-purple-600 py-2 rounded text-white font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            Submit
          </button>
        
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
