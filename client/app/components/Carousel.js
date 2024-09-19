import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numToShow, setNumToShow] = useState(1); // Default to showing 1 image

  const images = [
    { src: "/Dryer.png", description: "Dryer Repair" },
    { src: "/Washing.png", description: "Washing Machine Repair" },
    { src: "/Ref.png", description: "Refrigerator" },
  ];

  // Define the number of images to show based on screen size
  const numImagesToShow = {
    sm: 1, // Small screens (1 image)
    md: 2, // Medium screens (2 images)
    lg: 3, // Large screens (3 images)
  };

  // Function to get the current screen size
  const getScreenSize = () => {
    if (window.innerWidth < 640) {
      return "sm";
    } else if (window.innerWidth < 768) {
      return "md";
    } else {
      return "lg";
    }
  };

  // Update the number of displayed images and the currentIndex when the window resizes
  useEffect(() => {
    const handleResize = () => {
      const screenSize = getScreenSize();
      setNumToShow(numImagesToShow[screenSize]);
      setCurrentIndex((prevIndex) => prevIndex % images.length); // Reset index
    };

    handleResize(); // Set initial state based on initial screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getDisplayedImages = () => {
    const endIndex = (currentIndex + numToShow) % images.length;
    if (endIndex > currentIndex) {
      return images.slice(currentIndex, endIndex);
    }
    return [...images.slice(currentIndex), ...images.slice(0, endIndex)];
  };

  return (
    <div className="relative roboto-font-nav">
      <div className="flex items-center">
        <FaChevronLeft
          className="text-5xl hover:scale-110 text-gray-500 cursor-pointer absolute left-0 z-10"
          onClick={handlePrev}
        />
        <div className="flex overflow-hidden mx-auto">
          <div className="flex">
            {getDisplayedImages().map((item, index) => (
              <div
                key={index}
                className={`relative bg-white p-10 border primary-color rounded-[50px] mx-2 w-80`}
              >
                <img
                  className="w-80 h-auto shadow-md shadow-slate-600"
                  src={item.src}
                  alt={`Service ${index + 1}`}
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 shadow-lg text-black p-4 text-center w-52 font-bold text-sm">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <FaChevronRight
          className="text-5xl hover:scale-110 text-gray-500 cursor-pointer absolute right-0 z-10"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Carousel;
