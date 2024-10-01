"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await fetch("/api/getInTouch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);

      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });

      // Show success toast
      toast.success("Your message has been sent successfully!"); // Success toast
    } catch (error) {
      console.error("Error:", error);
      // Show error toast
      toast.error("There was an error sending your message. Please try again."); // Error toast
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Add ToastContainer for displaying notifications */}
      <div className="flex flex-col min-h-screen roboto-font-nav">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto text-center mb-5 mt-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
              GET
              <span className="blue-text"> IN</span>
              <span className="red-text"> TOUCH </span>
            </h2>
            <p className="text-md md:text-lg font-semibold text-black mb-2">
              We’re ready to help with all your appliance repair needs.{" "}
              <span className="blue-text"> Contact us</span> via phone or email,
              or use the form below to book a service appointment.
            </p>
            <p className="text-md md:text-lg text-black lg:mt-5 ">
              Fill out our Contact Form below
            </p>
          </div>
          <div className="flex justify-center items-center py-10">
            <div
              className="relative bg-gray-400 md:bg-cover md:bg-center md:bg-no-repeat rounded-lg w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row"
              style={{
                backgroundImage:
                  window.innerWidth >= 768 ? "url('washrepair.jpg')" : "none",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

              <div className="relative z-10 p-10 w-full md:w-1/2 flex flex-col items-start text-white">
                <Image
                  src="/Raymond 1.png"
                  alt="Company Logo"
                  width={350}
                  height={350}
                />
                <div className="flex items-center mb-4 lg:mt-10">
                  <FaPhoneAlt className="mr-2" />
                  <span>Phone: 778-922-8628 or 778-922-7812</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="mr-2" />
                  <span>Email: blonesraymund@gmail.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>
                    Address: Serving Greater Victoria and surrounding areas
                  </span>
                </div>
                <div className="flex items-center mb-4 lg:mb-44">
                  <FaClock className="mr-2" />
                  <span>Operating Hours: Monday to Sunday: 9 AM - 11 PM</span>
                </div>
              </div>

              <div className="w-px bg-white opacity-50"></div>

              <div className="relative z-10 p-8 w-full md:w-1/2">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@email.com"
                        required
                      />
                    </div>

                    <div className="flex-1">
                      <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      What's the problem that we can assist with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center hover:scale-105">
                    <button
                      type="submit"
                      className="footer-button border-none "
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="loader"></div> // Loader Spinner
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>

                  <p className="text-gray-300 text-sm text-center mt-2  ">
                    We respect your privacy. The information provided is used
                    only to respond to your inquiry and arrange your service. We
                    do not share your data with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
