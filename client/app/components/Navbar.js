"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Black Bar Section */}
      <div className="bg-black text-white roboto-font-nav text-sm md:text-base hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          {/* Contact Icon */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <i className="fas fa-phone-alt w-5 h-5 text-white"></i>
            <span className="font-medium"> 778-922-8628 or 778-922-7812</span>
          </div>

          {/* Links */}
          <div className="space-x-4 text-xs sm:text-xs">
            <Link href="/#ourReviews" className="hover:underline">
              REVIEWS
            </Link>
            <Link href="/blogs" className="hover:underline">
              BLOGS
            </Link>
            <Link href="/contacts" className="hover:underline">
              CONTACTS
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-white  roboto-font-nav text-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Logo */}
              {/* <a href="#" className="text-2xl font-bold text-blue-500">
                LOGO
              </a> */}
              <img src="/Raymond 1.png" className="pb-2" alt="Logo"></img>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="text-black px-3 py-2 rounded-md group 
                 
             "
              >
                HOME
                <span
                  className={`block h-[2px] bg-gray-500 transform ${
                    isActive("/") ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 transition-transform duration-300`}
                ></span>
              </Link>
              <Link
                href="/about-us"
                className="text-black  px-3 py-2 rounded-md group"
              >
                ABOUT
                <span
                  className={`block h-[2px] bg-gray-500 transform ${
                    isActive("/about-us") ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 transition-transform duration-300`}
                ></span>
              </Link>
              <Link
                href="/services"
                className="text-black  px-3 py-2 rounded-md group"
              >
                SERVICES
                <span
                  className={`block h-[2px] bg-gray-500 transform ${
                    isActive("/services") ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 transition-transform duration-300`}
                ></span>
              </Link>
              <Link
                href="/pricing"
                className="text-black  px-3 py-2 rounded-md group"
              >
                PRICING
                <span
                  className={`block h-[2px] bg-gray-500 transform ${
                    isActive("/pricing") ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 transition-transform duration-300`}
                ></span>
              </Link>
              <Link
                href="/faq"
                className="text-black  px-3 py-2 rounded-md group"
              >
                FAQs
                <span
                  className={`block h-[2px] bg-gray-500 transform ${
                    isActive("/faq") ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100 transition-transform duration-300`}
                ></span>
              </Link>
            </div>
            <div className="hidden md:flex">
              <Link
                href="/quote"
                className="primary-button md:scale-75 lg:scale-100 hover:scale-x-105 text-center"
              >
                GET A FREE QUOTE
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none focus:text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-black  block px-3 py-2 rounded-md text-base font-medium group"
            >
              Home
              <span
                className={`block h-[2px] bg-gray-500 transform ${
                  isActive("/") ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300`}
              ></span>
            </Link>
            <Link
              href="/about-us"
              className="text-black  block px-3 py-2 rounded-md text-base font-medium group"
            >
              About
              <span className="block h-[2px] bg-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-black  block px-3 py-2 rounded-md text-base font-medium group"
            >
              Services
              <span
                className={`block h-[2px] bg-gray-500 transform ${
                  isActive("/services") ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300`}
              ></span>
            </Link>
            <Link
              href="/pricing"
              className="text-black  block px-3 py-2 rounded-md text-base font-medium group"
            >
              Pricing
              <span className="block h-[2px] bg-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/pricing"
              className="text-black  block px-3 py-2 rounded-md text-base font-medium group"
            >
              Faqs
              <span className="block h-[2px] bg-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/quote" className="primary-button">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
