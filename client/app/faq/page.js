"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="text-center w-[475x] space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-blue-900">
            Frequently<span className="red-text"> Asked Questions</span>
          </p>
          <p className="text-base text-center">
            Can't find answers? Email us at{" "}
            <span className="underline">blonesraymund@gmail.com</span>
            <br /> or call us at 778-922-8628
          </p>
        </div>
      </div>

      <div className="mt-10 px-5 sm:p-6 lg:p-0 ">
        <div className="w-full max-w-7xl mx-auto space-y-4 ">
          {/* Accordion Item 1 */}
          <div className="secondary-color rounded-3xl mx-0 md:mx-10 hover:scale-105 transform transition-transform">
            <button
              className="flex items-center w-full  text-left px-4 py-3 md:pl-16 text-md lg:text-2xl roboto-font-nav text-slate-50 secondary-color focus:outline-none rounded-3xl "
              onClick={() => toggleAccordion(1)}
            >
              <img src="/Check Mark.svg" className="w-9 me-10"></img>
              What areas do you serve?
            </button>
            <div
              className={`${
                openIndex === 1 ? "block" : "hidden"
              } px-4 md:pl-16 py-2 text-slate-50 transition-all duration-300 ease-in-out border-t-2 border-slate-400`}
            >
              <p className="text-lg">
                We proudly serve Victoria, BC, and the surrounding areas.
              </p>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="secondary-color rounded-3xl mx-0 md:mx-10 hover:scale-105 transform transition-transform">
            <button
              className="flex items-center w-full text-left px-4 py-3 md:pl-16 text-md lg:text-2xl roboto-font-nav text-slate-50 secondary-color focus:outline-none rounded-3xl"
              onClick={() => toggleAccordion(2)}
            >
              <img src="/Check Mark.svg" className="w-9 me-10"></img>
              How does your pricing works?
            </button>
            <div
              className={`${
                openIndex === 2 ? "block" : "hidden"
              } px-4 py-2 md:pl-16 text-slate-50 transition-all duration-300 ease-in-out border-t-2 border-slate-400`}
            >
              <p className="text-lg">
                Our diagnostic fee is $79, which is waived if the repair is
                completed. Repairs start at $129 for basic issues. We provide a
                full estimate before proceeding with any work, so there are no
                surprises.
              </p>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="secondary-color rounded-3xl mx-0 md:mx-10 hover:scale-105 transform transition-transform">
            <button
              className="flex items-center w-full text-left px-4 py-3 md:pl-16 text-md lg:text-2xl roboto-font-nav text-slate-50 secondary-color focus:outline-none rounded-3xl"
              onClick={() => toggleAccordion(3)}
            >
              <img src="/Check Mark.svg" className="w-9 me-10"></img>
              Do you offer warranties on repairs?
            </button>
            <div
              className={`${
                openIndex === 3 ? "block" : "hidden"
              } px-4 py-2 md:pl-16 text-slate-50 transition-all duration-300 ease-in-out border-t-2 border-slate-400`}
            >
              <p className="text-lg">
                Yes! If the same issue recurs within our warranty period, we
                will address it at no additional cost.
              </p>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="secondary-color rounded-3xl mx-0 md:mx-10 hover:scale-105 transform transition-transform">
            <button
              className="flex items-center w-full text-left px-4 py-3 md:pl-16 text-md lg:text-2xl roboto-font-nav text-slate-50 secondary-color focus:outline-none rounded-3xl"
              onClick={() => toggleAccordion(4)}
            >
              <img src="/Check Mark.svg" className="w-9 me-10"></img>
              What is your "no fix, no fee" policy?
            </button>
            <div
              className={`${
                openIndex === 4 ? "block" : "hidden"
              } px-4 py-2 md:pl-16 text-slate-50 transition-all duration-300 ease-in-out border-t-2 border-slate-400`}
            >
              <p className="text-lg">
                If we cannot repair your appliance after diagnosing the issue,
                you only pay the diagnostic fee—there are no further charges.
              </p>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="secondary-color rounded-3xl mx-0 md:mx-10 hover:scale-105 transform transition-transform">
            <button
              className="flex items-center w-full text-left px-4 py-3 md:pl-16 text-md lg:text-2xl roboto-font-nav text-slate-50 secondary-color focus:outline-none rounded-3xl"
              onClick={() => toggleAccordion(5)}
            >
              <img src="/Check Mark.svg" className="w-9 me-10"></img>
              How quickly can you schedule my repair?
            </button>
            <div
              className={`${
                openIndex === 5 ? "block" : "hidden"
              } px-4 py-2 md:pl-16 text-slate-50 transition-all duration-300 ease-in-out border-t-2 border-slate-400`}
            >
              <p className="text-lg">
                We strive for same-day or next-day service depending on
                availability, especially for urgent repairs.
              </p>
            </div>
          </div>

          {/* Accordion Item 6 */}
          <div className="secondary-color rounded-3xl mx-0 md:mx-10 hover:scale-105 transform transition-transform">
            <button
              className="flex items-center w-full text-left px-4 py-3 md:pl-16 text-md lg:text-2xl roboto-font-nav text-slate-50 secondary-color focus:outline-none rounded-3xl"
              onClick={() => toggleAccordion(6)}
            >
              <img src="/Check Mark.svg" className="w-9 me-10"></img>
              How do we charge a diagnostic fee?
            </button>
            <div
              className={`${
                openIndex === 6 ? "block" : "hidden"
              } px-4 py-2 md:pl-16 text-slate-50 transition-all duration-300 ease-in-out border-t-2 border-slate-400`}
            >
              <p className="text-lg">
                The diagnostic fee ensures that you receive a comprehensive,
                professional evaluation of your appliance problem. Our
                technicians devote the necessary time and expertise to find the
                root cause of the issue. This fee guarantees value for a proper
                diagnosis and helps offset travel expenses and technician time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <div className="text-center mt-8 roboto-font-nav flex flex-col items-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
              Don't Wait - <span className="blue-text">Book </span>Your{" "}
              <span className="red-text">Repair </span>Today!
            </p>
            <div className="max-w-2xl sm:w-96 lg:w-full mt-4">
              <p className="sm:text-xl lg:text-lg font-extralight text-gray-700">
                Don't let a broken appliance slow you down. Contact us now and
                schedule your repair. We're just a call or click away!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <Link
            href="/quote"
            className="primary-button md:scale-75 lg:scale-100 hover:scale-x-105 text-center"
          >
            GET A FREE QUOTE
          </Link>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <p className="red-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center roboto-font-nav">
            What Client Says
          </p>
          <div className="w-full lg:w-full mt-4">
            <p className="sm:text-xl lg:text-lg roboto-font-nav text-center ">
              Join the many homeowners who trust us with their <br />
              appliance repairs and experience the difference for yourself!!
            </p>
          </div>
          <div className="bg-[#C8DBFF] p-5 lg:py-10 lg:px-14 rounded-[70px] sm:mx-10 md:mx-5 lg:mx-16 my-8 md:mb-24 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-24 text-black">
              <div className="flex flex-col max-w-sm mx-auto secondary-color-darker  rounded-[45px] p-6">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-2xl xl:text-4xl">
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="text-white text-sm font-bold ml-2">
                    5 out of 5 on &nbsp;
                    <span className="blue-text">g</span>
                    <span className="red-text">o</span>
                    <span className="yellow-text">o</span>
                    <span className="blue-text">g</span>
                    <span className="green-text">l</span>
                    <span className="red-text">e</span>
                  </span>
                </div>
                <p className="text-white text-lg font-bold text-left mb-3 mt-5">
                  Kris Wilson
                </p>{" "}
                {/* Set to text-left */}
                <p className="text-sm text-white text-justify font-extralight">
                  “Excellent service, installed the replacement part on my
                  freezer and was very professional and punctual. Anything
                  appliance related this is your guy! Thanks again.”
                </p>
              </div>

              <div className="flex flex-col max-w-sm mx-auto secondary-color-darker  rounded-[45px] p-6">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-2xl xl:text-4xl">
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="text-white text-sm font-bold ml-2">
                    5 out of 5 on <span className="blue-text">g</span>
                    <span className="red-text">o</span>
                    <span className="yellow-text">o</span>
                    <span className="blue-text">g</span>
                    <span className="green-text">l</span>
                    <span className="red-text">e</span>
                  </span>
                </div>
                <p className="text-white text-lg font-bold text-left mb-3 mt-5">
                  Robyn Smith
                </p>{" "}
                {/* Set to text-left */}
                <p className="text-sm text-white  mb-5 text-justify font-extralight">
                  “Raymond was amazing! He even came on a Saturday afternoon to
                  fix our washer. He was fast and efficient and had great
                  communication. We will definitely call him for any of
                  appliance repairs in the future.”
                </p>
              </div>

              <div className="flex flex-col max-w-sm mx-auto secondary-color-darker  rounded-[45px] p-6">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-2xl xl:text-4xl">
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="text-white text-sm font-bold ml-2">
                    5 out of 5 on &nbsp;
                    <span className="blue-text">g</span>
                    <span className="red-text">o</span>
                    <span className="yellow-text">o</span>
                    <span className="blue-text">g</span>
                    <span className="green-text">l</span>
                    <span className="red-text">e</span>
                  </span>
                </div>
                <p className="text-white text-lg font-bold text-left mb-3 mt-5">
                  Leslie Trivinos
                </p>{" "}
                {/* Set to text-left */}
                <p className="text-sm text-white text-justify font-extralight">
                  “This was a really good service, I was really struggling with
                  my washing machine but Raymund was able to find the problems
                  right away, he was quick and efficient , I certainly recommend
                  him.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FrequentlyAsked;
