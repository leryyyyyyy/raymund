"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CountUp from "react-countup";
import Carousel from "./components/Carousel";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen roboto-font-nav">
      <Navbar />
      <main className="flex-grow">
        <section
          className="bg-cover bg-center bg-no-repeat h-[75vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
          style={{
            backgroundImage: "url('/image 5.png')",
          }}
          aria-label="Background image showing appliance repair services"
        >
          <div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 pt-10 sm:pt-16 md:pt-20">
                <h1 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl xl:text-5xl dark:text-white whitespace-nowrap">
                  <span className="inline-block secondary-color text-white px-4 py-3">
                    WE REPAIR APPLIANCES
                  </span>
                </h1>

                <h2 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 font-extrabold tracking-tight text-lg sm:text-2xl md:text-3xl xl:text-4xl dark:text-white whitespace-nowrap">
                  <span className="inline-block tertiary-color text-white px-4 py-3">
                    STOVES, DRYERS AND MORE!
                  </span>
                </h2>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="#get-started"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button"
                  >
                    GET STARTED
                  </a>
                  <a
                    href="#our-services"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button"
                  >
                    OUR SERVICES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-auto py-8 secondary-color">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              <img
                className="w-40 sm:w-48 md:w-52 lg:w-72 h-auto"
                src="/top.png"
                alt="Logo"
              />
              <div className="flex flex-col items-center text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  MOST TRUSTED INDEPENDENT APPLIANCE REPAIR BUSINESS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      <CountUp end={25} duration={2} />
                    </div>
                    <div className="text-sm md:text-base">
                      rated from <span className="blue-text">g</span>
                      <span className="red-text">o</span>
                      <span className="yellow-text">o</span>
                      <span className="blue-text">g</span>
                      <span className="green-text">l</span>
                      <span className="red-text">e</span> reviews
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      <CountUp end={1000} duration={2} />
                    </div>
                    <div className="text-sm md:text-base">jobs finished</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      <CountUp end={500} duration={2} />
                    </div>
                    <div className="text-sm md:text-base">months warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto py-8 roboto-font-nav">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1">
                <img
                  className="w-fit h-auto"
                  src="/EmergencySolutions.png"
                  alt="Box"
                />
              </div>
              <div className="flex-1 md:pl-8 mt-4 md:mt-0 text-black">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  SERVICE OVERVIEW
                </h3>
                <p className="text-sm sm:text-sm md:text-lg text-justify">
                  Whether it's a broken washing machine, a faulty dishwasher, or
                  an air conditioner on the fritz, we've got you covered. Our
                  team of certified technicians specializes in diagnosing and
                  fixing all major appliance brands. With our transparent
                  pricing, swift response times, and a commitment to quality, we
                  make sure your appliances get back to working order in no
                  time.
                </p>
                <br />
                <p className="text-sm sm:text-base md:text-lg text-justify">
                  Whether it's a broken washing machine, a faulty dishwasher, or
                  an air conditioner on the fritz, we've got you covered. Our
                  team of certified technicians specializes in diagnosing and
                  fixing all major appliance brands. With our transparent
                  pricing, swift response times, and a commitment to quality, we
                  make sure your appliances get back to working order in no
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto py-8 roboto-font-nav bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2 text-black">
                WHAT SERVICE DO <span className="blue-text">YOU</span> NEED
                TODAY?
              </h2>

              <h3 className="text-lg  text-black">
                HOW CAN <span className="red-text">WE HELP</span> YOU TODAY?
              </h3>
            </div>
            <Carousel />
          </div>
        </div>
        <div className="h-auto py-8 roboto-font-nav">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pl-8 mt-4 md:mt-0 text-black p-4">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="blue-text">WHO </span>
                  <span className="red-text">WE ARE</span>
                </h3>
                <p className="text-base">
                  Founded by Raymund Blones, Raymund Blones Appliance Repair is
                  a professional and versatile appliance repair service based in
                  Victoria, BC. With over 8 years of experience in the industry,
                  Raymund recently established the business with a mission to
                  deliver efficient, reliable, and affordable appliance repair
                  solutions to homeowners in the Victoria area. We pride
                  ourselves on our commitment to high-quality workmanship and a
                  customer-first approach, ensuring that every repair is handled
                  with care, precision, and integrity.
                </p>
              </div>
              <div className="flex-1">
                <img className="w-fit h-auto" src="/kgroun.png" alt="Box" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto py-8 roboto-font-nav">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pl-8 mt-4 md:mt-0 p-4">
                <img className="w-fit h-auto" src="/manBlue.png" alt="Box" />
              </div>
              <div className="flex-1 ">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="blue-text">ACCEPT </span>
                  <span className="red-text">NO IMITATIONS</span>
                </h3>
                <p className="text-base text-black">
                  While others may try to imitate our service, Raymund Blones
                  Appliance Repair stands apart with our dedication to
                  excellence and the personal touch that only a locally owned
                  and operated business can offer. We are recognized for our
                  prompt, hassle-free service, and a track record of satisfied
                  customers throughout Victoria. Our work isn't just about
                  fixing appliances—it's about building trust with each client
                  and ensuring that their home runs smoothly again. When you
                  need appliance repair, make sure you're calling on the real
                  experts—Raymund Blones Appliance Repair.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto py-8 roboto-font-nav bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2 text-black">
                CUSTOMER REVIEW
              </h2>
            </div>
            <div className=" secondary-color p-8 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
                <div className="flex flex-col items-center max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
                  <span className="text-lg font-bold ">Miranda Curtis</span>
                  <p className="mb-2">
                    on <span className="blue-text">g</span>
                    <span className="red-text">o</span>
                    <span className="yellow-text">o</span>
                    <span className="blue-text">g</span>
                    <span className="green-text">l</span>
                    <span className="red-text">e</span>
                  </p>
                  <div className="flex mb-4">
                    <span className="text-yellow-400 text-4xl">★ ★ ★ ★ ★</span>
                  </div>
                  <p className="text-lg text-gray-700 text-center">
                    "I had a great experience with this appliance repair
                    service. They were quick, professional, and my washing
                    machine is running like new again!"
                  </p>
                </div>

                <div className="flex flex-col items-center max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
                  <span className="text-lg font-bold">Robyn Smith</span>
                  <p className="mb-2">
                    on <span className="blue-text">g</span>
                    <span className="red-text">o</span>
                    <span className="yellow-text">o</span>
                    <span className="blue-text">g</span>
                    <span className="green-text">l</span>
                    <span className="red-text">e</span>
                  </p>
                  <div className="flex mb-4">
                    <span className="text-yellow-400 text-4xl">★ ★ ★ ★ ★</span>
                  </div>
                  <p className="text-lg text-gray-700 text-center">
                    "Their service was fantastic! The technician was friendly
                    and quickly fixed my refrigerator. Highly recommended!"
                  </p>
                </div>

                <div className="flex flex-col items-center max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
                  <span className="text-lg font-bold">Leslie Trivinos</span>
                  <p className="mb-2">
                    on <span className="blue-text">g</span>
                    <span className="red-text">o</span>
                    <span className="yellow-text">o</span>
                    <span className="blue-text">g</span>
                    <span className="green-text">l</span>
                    <span className="red-text">e</span>
                  </p>
                  <div className="flex mb-4">
                    <span className="text-yellow-400 text-4xl">★ ★ ★ ★ ★</span>
                  </div>
                  <p className="text-lg text-gray-700 text-center">
                    "Fast, efficient, and affordable. They got my dryer working
                    again in no time. Excellent service!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
