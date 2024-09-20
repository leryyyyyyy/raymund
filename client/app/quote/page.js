"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    services: [],
    details: "",
  });

  const [message, setMessage] = useState({ show: false, type: "", text: "" });
  const [formError, setFormError] = useState({
    servicesError: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const services = prevData.services.includes(value)
          ? prevData.services.filter((service) => service !== value)
          : [...prevData.services, value];
        return { ...prevData, services };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      setFormError({ servicesError: "Please select at least one service." });
      return; // Stop the form submission
    }

    // If validation passes, clear the error message
    setFormError({ servicesError: "" });
    setLoading(true); // Start loading

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/quotation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Show success message
        setMessage({
          show: true,
          type: "success",
          text: "Form submitted successfully!",
        });
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          services: [],
          details: "",
        });

        // Hide the message after 3 seconds
        setTimeout(() => setMessage({ show: false, type: "", text: "" }), 3000);
      } else {
        // Show error message
        setMessage({
          show: true,
          type: "error",
          text: "Failed to submit the form.",
        });
        setTimeout(() => setMessage({ show: false, type: "", text: "" }), 3000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage({
        show: true,
        type: "error",
        text: "An error occurred. Please try again.",
      });
      setTimeout(() => setMessage({ show: false, type: "", text: "" }), 3000);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col min-h-screen roboto-font-nav">
      <Navbar />
      <main className={`relative ${loading ? "opacity-50" : "opacity-100"}`}>
        <div
          className={`h-auto py-8 roboto-font-nav ${
            message.show ? "blur-sm" : ""
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
                Need a Repair? Get a <span className="blue-text">Free</span>
                <span className="red-text"> Estimate</span> Today!
              </h1>
            </div>

            {/* Pink color box form */}
            <div className="quote-form p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-md font-bold text-black "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="block text-md font-bold text-black "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-md font-bold text-black "
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <fieldset>
                    <legend className="block text-md font-bold text-black ">
                      What service/s do you require?
                    </legend>
                    <div className="mt-2 grid grid-cols-2 gap-y-6">
                      {[
                        "Dishwashers",
                        "Dryers",
                        "Ovens",
                        "Refrigerators",
                        "Stoves",
                        "Washing Machines",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                    {formError.servicesError && (
                      <p className=" text-red-950 text-sm mt-2">
                        {formError.servicesError}
                      </p>
                    )}
                  </fieldset>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="details"
                    className="block text-md font-bold text-black "
                  >
                    Do you have any additional details to share?
                  </label>
                  <textarea
                    rows="7"
                    cols="50"
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p className="text-sm text-black">
                    Note: Please provide any relevant details about the issue,
                    such as error codes, unusual noises, or how long the problem
                    has been occurring. This helps us diagnose the issue more
                    efficiently.
                  </p>
                </div>

                <div className="mb-4 flex justify-center">
                  <button
                    type="submit"
                    className="submit-button w-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {loading ? (
                      <span className="loader"></span> // Loading animation
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {message.show && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Page;
