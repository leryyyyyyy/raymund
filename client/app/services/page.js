"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Page() {
  const checkboxTexts = [
    "Bosch",
    "LG",
    "Samsung",
    "Whirlpool",
    "Maytag",
    "Kenmore",
    "Frigidaire",
    "GE Appliances",
  ];
  return (
    <div className="flex flex-col min-h-screen roboto-font-nav">
      <Navbar />
      <main className="flex-grow">
        <section className="relative flex flex-col lg:flex-row lg:h-screen sm:h-[50vh] md:h-[60vh] max-w-7xl mx-auto lg:max-w-none xl:pt-10">
          <div
            className="absolute inset-0 bg-cover bg-right bg-no-repeat sm:blur-none blur-sm hero-image-default"
            style={{
              zIndex: -1,
            }}
          ></div>
          <div className="relative lg:top-12 text-center lg:left-14 sm:text-left lg:text-left p-6 lg:p-0">
            <div className="md:space-y-2">
              <h1 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 lg:font-extrabold tracking-tight text-3xl sm:text-3xl md:text-6xl xl:text-8xl dark:text-white whitespace-nowrap">
                <span className="inline-block text-black px-4 py-3">
                  <span className="block">TOP TIER</span>
                  <span className="block blue-text">QUALITY</span>
                  <span className="block red-text">REPAIR</span>
                  <span className="block">APPLIANCES</span>
                </span>
              </h1>
            </div>
            {/* <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/quote"
                className="inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button"
              >
                GET A FREE QUOTE
              </a>
              <a
                href="/about-us"
                className=" secondary-button inline-flex [#FF3131] items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold "
              >
                GET TO KNOW US
              </a>
            </div> */}
            <div className="mt-10 ">
              <Link
                href="/quote"
                className="md:mr-5 inline-flex mb-5 mr-2  md:mb-0  items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button hover:bg-yellow-100 hover:scale-x-105"
              >
                GET A FREE QUOTE
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center  justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button hover:bg-yellow-100 hover:scale-x-105"
              >
                GET TO KNOW US
              </Link>
            </div>
          </div>
        </section>
        {/* <section
          className="relative bg-cover bg-no-repeat h-[70vh] lg:h-[80vh] bg-center hero-image-default"
          aria-label="Background image showing appliance repair services"
        >
      
          <div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 pt-10 sm:pt-16 md:pt-20">
                <h1 className="max-w-2xl mb-4 sm:mb-6 md:mb-8 lg:font-extrabold tracking-tight text-3xl sm:text-3xl md:text-6xl xl:text-8xl dark:text-white whitespace-nowrap">
                  <span className="inline-block text-black px-4 py-3">
                    <span className="block">TOP TIER</span>
                    <span className="block blue-text">QUALITY</span>
                    <span className="block red-text">REPAIR</span>
                    <span className="block">APPLIANCES</span>
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="/quote"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold primary-button"
                  >
                    GET A FREE QUOTE
                  </a>
                  <a
                    href="/about-us"
                    className=" secondary-button inline-flex [#FF3131] items-center justify-center px-4 py-2 text-sm sm:text-base md:text-lg font-semibold "
                  >
                    GET TO KNOW US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <div className="h-auto py-8 secondary-color text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* First section */}
                <div className="flex md:items-center lg:items-start px-4 sm:px-8 lg:px-16">
                  <div className="w-2 h-12 bg-yellow-500 mr-4"></div>
                  <div className="flex flex-col">
                    <div className="text-3xl md:text-5xl font-bold mb-2">
                      <CountUp end={5} decimals={1} duration={2} />
                    </div>
                    <div className="text-sm md:text-base">
                      rated from <span className="text-[#0095FF]">g</span>
                      <span className="red-text">o</span>
                      <span className="yellow-text">o</span>
                      <span className="text-[#0095FF]">g</span>
                      <span className="green-text">l</span>
                      <span className="red-text">e</span> reviews
                    </div>
                  </div>
                </div>

                {/* Second section */}
                <div className="flex md:items-center lg:items-start px-4 sm:px-8 lg:px-16">
                  <div className="w-3 h-12 bg-yellow-500 mr-4"></div>
                  <div className="flex flex-col">
                    <div className="text-3xl md:text-5xl font-bold mb-2">
                      <CountUp end={10} duration={2} />+
                    </div>
                    <div className="text-sm md:text-base">
                      Years of Experience in Appliance Repair
                    </div>
                  </div>
                </div>

                {/* Third section */}
                <div className="flex md:items-center lg:items-start px-4 sm:px-8 lg:px-16">
                  <div className="w-4 h-12 bg-yellow-500 mr-4 "></div>
                  <div className="flex flex-col">
                    <div className="text-3xl md:text-5xl font-bold mb-2">
                      <CountUp end={3} duration={2} />+
                    </div>
                    <div className="text-sm md:text-base">
                      Countries Worked In (Manila, Kuwait, Dubai, Canada)
                    </div>
                  </div>
                </div>

                {/* Fourth section */}
                <div className="flex md:items-center lg:items-start px-4 sm:px-8 lg:px-16">
                  <div className="w-3 h-12 bg-yellow-500 mr-4"></div>
                  <div className="flex flex-col">
                    <div className="text-3xl md:text-5xl font-bold mb-2">
                      <CountUp end={100} duration={2} />%
                    </div>
                    <div className="text-sm md:text-base">
                      Customer Satisfaction Guaranteed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto py-8 roboto-font-nav lg:mt-10 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
                <span className="blue-text">Top Appliances </span>
                <span className="red-text">We Repair</span>
              </h2>
              <p className="text-sm md:text-lg text-black">
                We repair a wide range of brands.
              </p>
              <p className="text-sm md:text-lg text-black">
                Here are some of the top brands we work with:
              </p>
            </div>
          </div>
        </div>

        <div className="checkBoxSection h-auto max-w-7xl mx-2 md:mx-auto py-8 px-4 sm:px-6 lg:px-8 tertiary-color">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {checkboxTexts.map((text, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-tertiary-color p-4 rounded-lg"
              >
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  checked
                  disabled
                  className="hidden"
                />
                <label
                  htmlFor={`custom-checkbox-${index}`}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-red-500 cursor-not-allowed relative flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 11l3 3 7-7"
                    />
                  </svg>
                </label>
                <span className="text-base sm:text-sm md:text-lg lg:text-3xl text-white">
                  {text}
                </span>
              </div>
            ))}
          </div>
          <div className="mx-auto lg:mt-4">
            <p className="  text-center text-sm md:text-xl text-white">
              If your appliance is from a different brand, don’t hesitate to
              contact us <br /> to see if we can assist with your repair needs.
            </p>
          </div>
        </div>

        <div className="h-auto py-5 roboto-font-nav lg:mt-10 ">
          <div className="container mx-auto px-4">
            <div className="text-center ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
                SERVICES
              </h2>
              <p className="text-sm md:text-2xl text-black font-semibold mb-2">
                Expert
                <span className="blue-text"> Appliance Repairs </span> You{" "}
                <span className="red-text">Can Trust</span>
              </p>
              <p className=" max-w-3xl mx-auto text-sm md:text-base font-extralight text-gray-400">
                We understand how essential your home appliances are to your
                daily life. That’s why we’re committed to providing fast,
                reliable, and expert repair services for a wide range of
                household appliances.
              </p>
            </div>
          </div>
        </div>

        <div class="p-4 mb-2">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 custom-horizontal-gap gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
              <div class="max-w-xs bg-white border border-gray-200 shadow-2xl dark:bg-zinc-800 dark:border-gray-700">
                <img class="w-full " src="washingmachines.png" alt="" />

                <div class="p-5 text-center">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Washing Machines
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-white">
                    We repair all major brands of front-load and top-load
                    washers, fixing issues like leaks, strange noises, and
                    draining problems.
                  </p>
                </div>
              </div>
              <div class="max-w-xs bg-white border border-gray-200 shadow-2xl  dark:bg-zinc-800 dark:border-gray-700">
                <img
                  class="w-full "
                  src="Refrigerators.png"
                  alt=" Refrigerators image"
                />

                <div class="p-5 text-center">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Refrigerators
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-white">
                    From cooling problems to ice maker issues, we quickly and
                    effectively repair all major refrigerator brands to prevent
                    spoilage.
                  </p>
                </div>
              </div>
              <div class="max-w-xs bg-white border border-gray-200 shadow-2xl dark:bg-zinc-800 dark:border-gray-700">
                <img class="w-full " src="/dryers.png" alt="" />

                <div class="p-5 text-center">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Dryers
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-white">
                    We handle all major brands, fixing issues like heating
                    problems, noisy operation, and more.
                  </p>
                </div>
              </div>
              <div class="max-w-xs bg-white border border-gray-200 shadow-2xl dark:bg-zinc-800 dark:border-gray-700">
                <img class="w-full " src="/ovens.png" alt="" />

                <div class="p-5 text-center">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Ovens
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-white">
                    We fix convection, gas, and electric ovens with heating
                    issues, temperature inconsistencies, or door problems.
                  </p>
                </div>
              </div>
              <div class="max-w-xs bg-white border border-gray-200 shadow-2xl dark:bg-zinc-800 dark:border-gray-700">
                <img class="w-full " src="/stoves.png" alt="" />

                <div class="p-5 text-center">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Stoves
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-white">
                    Whether gas or electric, we repair faulty burners, ignition
                    problems, and uneven heating to keep your stove in top
                    shape.
                  </p>
                </div>
              </div>
              <div class="max-w-xs bg-white border border-gray-200 shadow-2xl dark:bg-zinc-800 dark:border-gray-700">
                <img class="w-full " src="/dishwashers.png" alt="" />

                <div class="p-5 text-center">
                  <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Dishwashers
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-white">
                    We handle all major brands, resolving cleaning issues,
                    drainage problems, and more to keep your dishes spotless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto py-8 roboto-font-nav">
          <div className="container mx-auto px-4">
            <div className="text-center mb-2">
              <p className="text-sm md:text-2xl text-black font-semibold mb-2">
                Book Your <span className="blue-text">Repair</span> Today
              </p>
              <div className="flex justify-center  md:flex lg:mt-5">
                <Link
                  href="/quote"
                  className="secondary-button hover:bg-white hover:red-text hover:scale-x-105 "
                >
                  GET A FREE QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto py-8 roboto-font-nav">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-black">
                <span className="secondary-blue-text">
                  Signs You Need a <span className="red-text">Repair</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div class="p-4 mb-16">
          <div class="container mx-auto">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img class="w-20 h-20" src="/ear.svg" alt="ear" />
                </div>
                <p class="mt-2 text-center secondary-blue-text">
                  Strange Noise
                </p>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img
                    class="w-20 h-20"
                    src="/Break glass.png"
                    alt="Break glass"
                  />
                </div>
                <p class="mt-2 text-center secondary-blue-text">
                  Unresponsive Controls
                </p>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img
                    class="w-20 h-20"
                    src="/Unlike.png"
                    alt="Unlike Image "
                  />
                </div>
                <p class="mt-2 text-center secondary-blue-text">
                  Poor Performance
                </p>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img
                    class="w-20 h-20"
                    src="/Piping.png"
                    alt="Piping Image "
                  />
                </div>
                <p class="mt-2 text-center secondary-blue-text">Leaks</p>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img class="w-20 h-20" src="/Odor.png" alt="Odor Image" />
                </div>
                <p class="mt-2 text-center secondary-blue-text">Bad Odors</p>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img class="w-20 h-20" src="/Temp.png" alt="Image 6" />
                </div>
                <p class="mt-2 text-center secondary-blue-text">
                  Inconsistent Temperature
                </p>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img class="w-20 h-20" src="/Particle.png" alt="Image 7" />
                </div>
                <p class="mt-2 text-center secondary-blue-text">
                  Visible Damage
                </p>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-32 h-32 secondary-color-darker rounded-full flex items-center justify-center">
                  <img
                    class="w-20 h-20"
                    src="/Circled Right.png"
                    alt="Image 8"
                  />
                </div>
                <p class="mt-2 text-center secondary-blue-text">
                  Frequent Resets
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
