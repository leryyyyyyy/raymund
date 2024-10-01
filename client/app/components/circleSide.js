"use client";
import React, { useState } from "react";

const ChatbotCircle = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the open state when clicked
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Circle Button */}
      <div
        className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
        onClick={togglePopup}
      >
        <span className="text-white text-2xl">💬</span>
      </div>

      {/* Popup with logo and link */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col items-center space-y-2">
          <a
            href="https://www.facebook.com/raymundblonesappliancerepair?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="facebook.svg"
              alt="Social Media Logo"
              className="w-16 h-16"
            />
          </a>
          {/* <a
            href="https://www.yoursocialmedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/weAccept/discover.jpg"
              alt="Social Media Logo"
              className="w-16 h-16"
            />
          </a> */}
        </div>
      )}
    </div>
  );
};

export default ChatbotCircle;
