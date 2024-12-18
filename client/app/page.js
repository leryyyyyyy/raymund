"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CountUp from "react-countup";
import Carousel from "./components/Carousel";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow roboto-font-nav">
        {/* <section className="relative flex flex-col lg:flex-row lg:h-[75vh] sm:h-[50vh] md:h-[60vh] max-w-7xl mx-auto">
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat sm:blur-none blur-sm"
            style={{
              backgroundImage: "url('/image 5.png')",
              zIndex: -1,
            }}
          ></div>
          <div>
            <div className="grid max-w-screen-xl px-2 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 pt-10 sm:pt-16 md:pt-20">
                <h1 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 font-extrabold tracking-tight text-2xl sm:text-3xl md:text-5xl xl:text-[75px] dark:text-white whitespace-nowrap">
                  <span className="inline-block secondary-color text-white px-4 py-3">
                    WE REPAIR APPLIANCES
                  </span>
                </h1>

                <h2 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 font-extrabold tracking-tight text-lg sm:text-2xl md:text-3xl xl:text-4xl dark:text-white whitespace-nowrap">
                  <span className="inline-block tertiary-color text-white px-4 py-3">
                    STOVES, DRYERS AND MORE!
                  </span>
                </h2>

                <div className="flex flex-wrap gap-4 mt-14">
                  <a
                    href="/faq"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button hover:bg-yellow-100 hover:scale-x-105"
                  >
                    LEARN MORE
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button hover:bg-yellow-100 hover:scale-x-105"
                  >
                    OUR SERVICES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="relative flex flex-col lg:flex-row lg:h-screen sm:h-[50vh] md:h-[60vh] max-w-7xl mx-auto lg:max-w-none xl:pt-10">
          <div
            className="absolute inset-0 bg-cover bg-center sm:blur-none blur-sm"
            style={{
              backgroundImage: "url('/image 5.png')",
              zIndex: -1,
            }}
          ></div>

          <div className="relative lg:top-36 text-center lg:left-14 sm:text-left lg:text-left p-6 lg:p-0">
            <div className="md:space-y-2">
              <h1 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 font-extrabold tracking-tight text-2xl sm:text-3xl md:text-5xl xl:text-[75px] dark:text-white whitespace-nowrap">
                <span className="inline-block secondary-color text-white px-4 py-3">
                  WE REPAIR APPLIANCES
                </span>
              </h1>
              <h2 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 font-extrabold tracking-tight text-lg sm:text-2xl md:text-3xl xl:text-4xl dark:text-white whitespace-nowrap">
                <span className="inline-block tertiary-color text-white px-4 py-3">
                  STOVES, DRYERS AND MORE!
                </span>
              </h2>
            </div>
            <div className="mt-10 ">
              <Link
                href="/faq"
                className="md:mr-5  inline-flex mb-5 mr-2  md:mb-0inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button hover:bg-yellow-100 hover:scale-x-105"
              >
                LEARN MORE
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button hover:bg-yellow-100 hover:scale-x-105"
              >
                OUR SERVICE
              </Link>
            </div>
          </div>
        </section>

        <div className="h-auto py-8 secondary-color text-white">
          <div className="container mx-auto xl:px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              <img
                className="w-40 sm:w-48 md:w-52 lg:w-72 h-auto"
                src="/top.png"
                alt="Logo"
              />
              <div className="flex flex-col items-center text-center md:text-left">
                <h2 className="text-xl md:text-2xl md:text-center xl:text-4xl font-bold mb-7">
                  MOST TRUSTED INDEPENDENT APPLIANCE REPAIR BUSINESS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                      <CountUp end={5} decimals={1} duration={2} />
                    </div>
                    <div className="text-sm md:text-xl text-center">
                      rated from <span className="text-[#0095FF]">g</span>
                      <span className="red-text">o</span>
                      <span className="yellow-text">o</span>
                      <span className="text-[#0095FF]">g</span>
                      <span className="green-text">l</span>
                      <span className="red-text">e</span> reviews
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                      <CountUp end={300} duration={2} />+
                    </div>
                    <div className="text-sm md:text-xl">jobs finished</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                      <CountUp end={3} duration={2} />
                    </div>
                    <div className="text-sm md:text-xl">months warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto py-8 roboto-font-nav">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="flex-1 flex justify-center items-center ">
                <img
                  className="w-fit h-auto md:mt-14 xl:mt-28"
                  src="/EmergencySolutions.png"
                  alt="Box"
                />
              </div>
              <div className="flex-1 md:pl-8 mt-4 lg:mt-[2rem] xl:mt-[-4rem] text-black flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
                  SERVICE OVERVIEW
                </h3>
                <p className="max-w-xl  text-sm sm:text-sm md:text-lg text-justify ">
                  Whether it's a broken washing machine, a faulty dishwasher, or
                  an air conditioner on the fritz, we've got you covered. Our
                  team of certified technicians specializes in diagnosing and
                  fixing all major appliance brands. With our transparent
                  pricing, swift response times, and a commitment to quality, we
                  make sure your appliances get back to working order in no
                  time.
                </p>
                <br />
                <p className=" max-w-xl text-sm sm:text-base md:text-lg text-justify">
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

        <div className="h-auto py-8 roboto-font-nav bg-[#E4F0FF] mt-3">
          <div className="container mx-auto px-4 mb-5">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
                WHAT SERVICE DO <span className="blue-text">YOU</span> NEED
                TODAY?
              </h2>
              <h2 className="text-base sm:text-sm md:text-md lg:text-xl text-black">
                We <span className="red-text">specialize</span> in diagnosing
                and repairing the following
              </h2>
            </div>
            {/* Image Grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {["s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png"].map(
                (src, index) => (
                  <div
                    key={index}
                    className="relative w-full max-w-xs h-64 shadow-2xl bg-white flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Service ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#5694F0] opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="h-auto py-2 sm:py-6 md:py-8 roboto-font-nav text-black">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold xl:mb-8  text-center">
              <span className="blue-text">WHO </span>
              <span className="red-text">WE ARE</span>
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 flex justify-center md:pl-8 mt-4 md:mt-0 p-4">
                <img className="w-fit h-auto" src="/kgroun.png" alt="Box" />
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-sm md:text-lg text-justify lg:mt-14">
                  Raymund Blones Appliance Repair is a professional and
                  versatile appliance repair service based in Victoria, BC. With
                  over 8 years of experience in the industry, Raymund recently
                  established the business with a mission to deliver efficient,
                  reliable, and affordable appliance repair solutions to
                  homeowners in the Victoria area. We pride ourselves on our
                  commitment to high-quality workmanship and a customer-first
                  approach, ensuring that every repair is handled with care,
                  precision, and integrity.
                </p>
                <div className="mt-3 flex justify-center">
                  <Link
                    href="/about-us"
                    className="tertiary-color px-9 py-3 rounded-full shadow-md shadow-slate-500 mt-8 text-white hover:bg-red-400 hover:text-red-950 font-bold"
                  >
                    OUR STORY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-auto py-8 roboto-font-nav mt-5" id="ourReviews">
          <div className="container mx-auto xl:px-4 ">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
                OUR REVIEWS
              </h2>
              <p className="max-w-3xl mx-auto text-center">
                We take pride in delivering fast, reliable, and friendly
                service. Don't just take our word for it—read what our satisfied
                clients have to say about their experiences with Raymund Blones
                Appliance Repair. Your trust is our commitment
              </p>
            </div>
            <div className="p-1 xl:p-14">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
                <div className="flex flex-col max-w-sm mx-auto bg-white shadow-2xl shadow-gray-400 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-4xl">
                      ★ ★ ★ ★ ★
                    </span>
                    <span className="text-sm font-bold ml-2">
                      5 out of 5 on &nbsp;
                      <span className="blue-text">g</span>
                      <span className="red-text">o</span>
                      <span className="yellow-text">o</span>
                      <span className="blue-text">g</span>
                      <span className="green-text">l</span>
                      <span className="red-text">e</span>
                    </span>
                  </div>
                  <p className="text-lg font-bold text-left mb-5">
                    Miranda Curtis
                  </p>{" "}
                  <p className="text-sm text-gray-700 text-justify">
                    “Raymund was wonderful! Efficient, good communication, and
                    friendly. Will definitely go to him again.. ”
                  </p>
                </div>

                <div className="flex flex-col max-w-sm mx-auto bg-white shadow-2xl shadow-gray-400 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-4xl">
                      ★ ★ ★ ★ ★
                    </span>
                    <span className="text-sm font-bold ml-2">
                      5 out of 5 on <span className="blue-text">g</span>
                      <span className="red-text">o</span>
                      <span className="yellow-text">o</span>
                      <span className="blue-text">g</span>
                      <span className="green-text">l</span>
                      <span className="red-text">e</span>
                    </span>
                  </div>
                  <p className="text-lg font-bold text-left mb-5">
                    Robyn Smith
                  </p>{" "}
                  <p className="text-sm text-gray-700  mb-5 text-justify">
                    “Raymond was amazing! He even came on a Saturday afternoon
                    to fix our washer. He was fast and efficient and had great
                    communication. We will definitely call him for any of
                    appliance repairs in the future.”
                  </p>
                </div>

                <div className="flex flex-col max-w-sm mx-auto bg-white shadow-2xl shadow-gray-400 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-4xl">
                      ★ ★ ★ ★ ★
                    </span>
                    <span className="text-sm font-bold ml-2">
                      5 out of 5 on &nbsp;
                      <span className="blue-text">g</span>
                      <span className="red-text">o</span>
                      <span className="yellow-text">o</span>
                      <span className="blue-text">g</span>
                      <span className="green-text">l</span>
                      <span className="red-text">e</span>
                    </span>
                  </div>
                  <p className="text-lg font-bold text-left mb-5">
                    Leslie Trivinos
                  </p>{" "}
                  <p className="text-sm text-gray-700 text-justify">
                    “This was a really good service, I was really struggling
                    with my washing machine but Raymund was able to find the
                    problems right away, he was quick and efficient , I
                    certainly recommend him.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className=" p-5 lg:py-10 lg:px-14  sm:mx-10 md:mx-5 lg:mx-16 my-8 md:mb-24  "
          id="ourReviews"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
              OUR REVIEWS
            </h2>
            <p className="max-w-3xl mx-auto text-center">
              We take pride in delivering fast, reliable, and friendly service.
              Don't just take our word for it—read what our satisfied clients
              have to say about their experiences with Raymund Blones Appliance
              Repair. Your trust is our commitment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-0 text-black">
            <div className="flex flex-col max-w-sm mx-auto bg-white shadow-2xl shadow-gray-400 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-2xl xl:text-4xl">
                  ★ ★ ★ ★ ★
                </span>
                <span className="text-black text-sm font-bold ml-2">
                  5 out of 5 on &nbsp;
                  <span className="blue-text">g</span>
                  <span className="red-text">o</span>
                  <span className="yellow-text">o</span>
                  <span className="blue-text">g</span>
                  <span className="green-text">l</span>
                  <span className="red-text">e</span>
                </span>
              </div>
              <p className="text-black text-lg font-bold text-left mb-3 mt-5">
                Kris Wilson
              </p>{" "}
              {/* Set to text-left */}
              <p className="text-sm text-black text-justify font-extralight">
                “Excellent service, installed the replacement part on my freezer
                and was very professional and punctual. Anything appliance
                related this is your guy! Thanks again.”
              </p>
            </div>
            <div className="flex flex-col max-w-sm mx-auto bg-white shadow-2xl shadow-gray-400 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-2xl xl:text-4xl">
                  ★ ★ ★ ★ ★
                </span>
                <span className="text-black text-sm font-bold ml-2">
                  5 out of 5 on &nbsp;
                  <span className="blue-text">g</span>
                  <span className="red-text">o</span>
                  <span className="yellow-text">o</span>
                  <span className="blue-text">g</span>
                  <span className="green-text">l</span>
                  <span className="red-text">e</span>
                </span>
              </div>
              <p className="text-black text-lg font-bold text-left mb-3 mt-5">
                Robyn Smith
              </p>{" "}
              {/* Set to text-left */}
              <p className="text-sm text-black text-justify font-extralight">
                “Raymond was amazing! He even came on a Saturday afternoon to
                fix our washer. He was fast and efficient and had great
                communication. We will definitely call him for any of appliance
                repairs in the future.”
              </p>
            </div>

            <div className="flex flex-col max-w-sm mx-auto bg-white shadow-2xl shadow-gray-400 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-2xl sm:text-sm md:text-2xl lg:text-2xl xl:text-4xl">
                  ★ ★ ★ ★ ★
                </span>
                <span className="text-black text-sm font-bold ml-2">
                  5 out of 5 on &nbsp;
                  <span className="blue-text">g</span>
                  <span className="red-text">o</span>
                  <span className="yellow-text">o</span>
                  <span className="blue-text">g</span>
                  <span className="green-text">l</span>
                  <span className="red-text">e</span>
                </span>
              </div>
              <p className="text-black text-lg font-bold text-left mb-3 mt-5">
                Leslie Trivinos
              </p>{" "}
              {/* Set to text-left */}
              <p className="text-sm text-black text-justify font-extralight">
                “This was a really good service, I was really struggling with my
                washing machine but Raymund was able to find the problems right
                away, he was quick and efficient , I certainly recommend him.”
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center lg:mb-5">
          <a
            href="https://maps.app.goo.gl/L2GsCpHTx6BfuigUA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 border-b"
          >
            click here to view &nbsp;
            <span className="text-red-600 border-b-red-600">more reviews</span>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
