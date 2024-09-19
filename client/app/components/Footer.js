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
    <footer className="primary-color text-black py-16 mt-auto border-t-2 border-t-black">
      <div className=" max-w-fit mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Address and Google Maps */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
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
          <div className="lg:col-span-1">
            <div className="text-xl font-semibold">Contacts</div>
            <a href="mailto:blonesraymund@gmail.com" className="m-1 underline">blonesraymund@gmail.com</a>
            <p className="m-1">778-922-8628</p>
            {/* <p>blonesraymund@gmail.com</p> */}

            <form onSubmit={handleFeedbackSubmit} className="mt-4">
              <div className="text-xl font-semibold">Send Us Your Feedback</div>
              <p>
                Your feedback helps us serve you better! Send us through email.
              </p>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                rows="4"
                className="w-full p-2 mt-1 border border-gray-600 rounded-md"
                placeholder="Message..."
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-4 py-2 footer-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>

            {/* Success/Error Messages */}
            {successMessage && (
              <p className="green-text mt-2">{successMessage}</p>
            )}
            {errorMessage && <p className="red-text mt-2">{errorMessage}</p>}
          </div>

          {/* Section 3: About and Social Media */}
          <div className="space-y-4 lg:col-span-1">
            <div className="text-xl font-semibold">About</div>
            <ul className="space-y-2">
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:underline">
                  Reviews
                </Link>
              </li>
            </ul>
            <div className="text-xl font-semibold">Follow Us</div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className=" hover:text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f mr-3"></i>
                Facebook insert facebook name
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
