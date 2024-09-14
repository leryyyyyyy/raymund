"use client";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic here
    alert("Feedback submitted: " + feedback);
    setFeedback("");
  };

  return (
    <footer className="primary-color text-black py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Address and Google Maps */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <div className="text-lg font-semibold">Our Address</div>
            <p>
              1234 Street Name,
              <br />
              City, State, 123456
              <br />
              Country
            </p>
            <div className="w-full h-64 relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.271743839858!2d-122.41941898468112!3d37.77492927975996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581c825d9c67b%3A0x804d96e7b0b1d1f3!2sSan%20Francisco%2C%20CA%2094101%2C%20USA!5e0!3m2!1sen!2sin!4v1633079444132!5m2!1sen!2sin"
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Section 2: Contacts and Feedback */}
          <div className="space-y-4 lg:col-span-1">
            <div className="text-lg font-semibold">Contact Us</div>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: (123) 456-7890</p>
            <form onSubmit={handleFeedbackSubmit} className="mt-4">
              <div className="text-lg font-semibold">Send Us Your Feedback</div>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                rows="4"
                className="w-full p-2 mt-1 border border-gray-600 rounded-md"
                placeholder="Your feedback..."
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Section 3: About and Social Media */}
          <div className="space-y-4 lg:col-span-1">
            <div className="text-lg font-semibold">About</div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contacts"
                  className="text-blue-400 hover:underline"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-blue-400 hover:underline">
                  Reviews
                </Link>
              </li>
            </ul>
            <div className="text-lg font-semibold">Follow Us</div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-blue-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-blue-400 hover:text-blue-500"
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
