"use client";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Optional: handle loading state
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedback }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      const result = await response.json();
      setSuccessMessage("Feedback submitted successfully!");
    } catch (error) {
      setErrorMessage("There was an error submitting your feedback.");
    } finally {
      setIsSubmitting(false);
      setFeedback("");
    }
  };

  return (
    <footer className="primary-color text-black mt-auto border-t-[1px] border-t-black">
      <div className="max-w-fit py-1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-32">
          {" "}
          {/* Increased gap from 8 to 12 */}
          {/* Section 1: Address and Google Maps */}
          <div className="flex flex-col space-y-4 lg:col-span-2 p-4">
            {" "}
            {/* Added padding */}
            <div className="text-lg font-semibold">Location</div>
            <p>3914 Shelbourne St., Victoria, BC, Canada V8P 4J1</p>
            <div className="w-full h-80 relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.271743839858!2d-122.41941898468112!3d37.77492927975996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581c825d9c67b%3A0x804d96e7b0b1d1f3!2sSan%20Francisco%2C%20CA%2094101%2C%20USA!5e0!3m2!1sen!2sin!4v1633079444132!5m2!1sen!2sin"
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
          {/* Section 2: Contacts and Feedback */}
          <div className="lg:col-span-1 p-4">
            {" "}
            {/* Added padding */}
            <div className="text-xl font-semibold">Contacts</div>
            <a href="mailto:blonesraymund@gmail.com" className="m-1 underline">
              blonesraymund@gmail.com
            </a>
            <p className="m-1">778-922-8628</p>
            <div className="mt-10 text-xl font-semibold">Follow Us</div>
            <div className="flex flex-col space-y-2">
              <a
                href="https://facebook.com"
                className="hover:text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            {successMessage && (
              <p className="green-text mt-2">{successMessage}</p>
            )}
            {errorMessage && <p className="red-text mt-2">{errorMessage}</p>}
          </div>
          {/* Section 3: About and Social Media */}
          <div className="space-y-4 lg:col-span-1 p-4">
            {" "}
            {/* Added padding */}
            <div className="text-xl font-semibold">About</div>
            <ul className="space-y-2">
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/#ourReviews" className="hover:underline">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Black Copyright Section */}
      <div className="bg-black text-white py-4 text-center">
        © 2024 Raymund Blones Appliances Repair
      </div>
    </footer>
  );
};

export default Footer;
