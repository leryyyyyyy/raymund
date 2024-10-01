import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow ">
        {/* Section 1 */}
        <section className="relative flex flex-col lg:flex-row lg:h-[75vh] sm:h-[50vh] md:h-[60vh] max-w-7xl mx-auto">
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat sm:blur-none blur-sm"
            style={{
              backgroundImage: "url('/hero.png')",
              zIndex: -1,
            }}
          ></div>

          <div className="relative lg:top-24 text-center lg:left-14 sm:text-left lg:text-left p-6 lg:p-0 ">
            <div className="md:space-y-2">
              <p className="red-text font-raleway no-decoration font-bold text-4xl sm:text-5xl lg:text-7xl mt-5 lg:mt-0">
                WELCOME TO
              </p>
              <p className="text-2xl sm:text-3xl lg:text-5xl text-shadow lg:mt-4 mt-2 ">
                RAYMUND BLONES
              </p>
              <p className="roboto-font-nav font-bold text-2xl sm:text-4xl lg:text-6xl blue-text lg:mt-4 mt-2">
                APPLIANCE REPAIR!
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/quote"
                className="primary-button font-bold custom-box-shadow mt-10 sm:mt-5 hover:bg-transparent text-md sm:text-xl lg:text-2xl"
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <div className="secondary-color flex flex-col lg:flex-row p-6 lg:p-3">
          <div className="flex-1 lg:p-8 p-2 flex justify-end">
            <img src="/about-2-img.svg" className="pt-5 sm:scale-90" />
          </div>
          <div className="flex-1 mt-7">
            <p className="text-2xl font-bold  font-inter text-white  text-center lg:text-left sm:text-3xl">
              WHY CHOOSE RAYMUND BLONES APPLIANCE REPAIR?
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Transparent Pricing",
                  text: "No hidden fees; everything is upfront.",
                },
                {
                  title: "No Fix, No Fee",
                  text: "If we can't repair your appliance, you only pay the diagnostic fee.",
                },
                {
                  title: "Customer-Centric",
                  text: "We focus on ensuring you get excellent service from start to finish.",
                },
                {
                  title: "Same-Day or Next-Day Service",
                  text: "We strive to address your repair needs as quickly as possible.",
                },
              ].map(({ title, text }, index) => (
                <div className="flex" key={index}>
                  <img src="/Check Mark.svg" className="w-15 h-15 mr-4" />
                  <div>
                    <p className="text-xl font-semibold font-inter text-white">
                      {title}
                    </p>
                    <p className="text-base font-inter text-white">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row p-6 lg:p-14 max-w-7xl mx-auto">
          <div className="lg:flex-none lg:w-2/3">
            <p className="text-3xl sm:text-4xl lg:text-3xl font-bold text-center lg:text-left">
              Welcome to Raymund Blones Appliance Repair!
            </p>
            <p className="text-lg sm:text-xl leading-6 lg:leading-9 sm:leading-8 mt-5 text-justify lg:text-indent">
              I’m Raymund, and I’m thrilled to be your go-to expert for all your
              appliance repair needs. Based in beautiful Victoria, BC, my
              mission is to provide you with honest ,reliable, and top-notch
              appliance repair services right when you need them.
            </p>
            <p className="text-lg sm:text-xl leading-6 lg:leading-9 sm:leading-8 mt-5 text-justify lg:text-indent">
              With extensive experience in appliance repair, I bring a wealth of
              expertise to every job. My journey started with a passion for
              fixing things, leading me to become a seasoned technician. Each
              location has enriched my skills and broadened my knowledge,
              allowing me to tackle a diverse range of appliance issues with
              confidence and precision.
            </p>
          </div>
          <div className="lg:flex-1 mt-5 lg:mt-0 flex justify-center">
            <img src="/about-3-img.svg" className="sm:scale-90 lg:scale-100" />
          </div>
        </div>

        {/* Section 4 */}
        <div
          className="bg-cover bg-center bg-no-repeat h-auto  px-6 py-4 "
          style={{ backgroundImage: "url('/about-4-img.svg')" }}
          aria-label="Background image showing appliance repair services"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center p-6 lg:p-10">
              <p className="text-xl sm:text-4xl text-white font-bold">
                Extensive Experience
              </p>
              <p className="mt-0 text-lg sm:text-2xl italic text-white">
                in appliance repair across
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-5 mb-5">
              {["Manila", "Kuwait", "Dubai", "Canada"].map((city, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={`/about-4-${city.toLowerCase()}.svg`}
                    className="h-[150px] w-auto sm:h-[200px] lg:h-[246px]"
                  />
                  <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold text-center">
                    {city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="py-9 px-6 lg:px-11">
          <p className="text-2xl sm:text-5xl font-bold text-center">
            Top <span className="blue-text">Features</span> what sets
          </p>
          <p className="text-2xl sm:text-5xl font-bold text-center">
            <span className="red-text">US</span> Apart
          </p>
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-20 justify-center mt-16">
            {[
              {
                image: "/Family.svg",
                text: "I treat every customer like family.",
              },
              {
                image: "/shop-tag.png",
                text: "Offer transparent pricing with no hidden fees.",
              },
              {
                image: "/buddies.png",
                text: "Your appliances are in good hands.",
              },
            ].map(({ image, text }, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#5989CA] rounded-[50px] p-8 w-full lg:w-80 text-center custom-box-shadow2"
              >
                <img
                  src={image}
                  className="mx-auto h-[100px] sm:h-[130px] lg:h-[154px]"
                />
                <p className="text-lg text-white mt-4">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/quote"
              className="primary-button font-bold custom-box-shadow mt-10 sm:mt-5 hover:bg-transparent text-md sm:text-xl lg:text-2xl"
            >
              GET A FREE QUOTE
            </Link>
          </div>
          <div className="text-center mt-14 roboto-font-nav flex flex-col items-center">
            <p className="text-xl sm:text-3xl font-bold">
              Thank you for considering{" "}
              <span className="blue-text">Raymund</span>{" "}
              <span className="red-text">Blones</span> Appliance Repair.
            </p>
            <div className="w-full sm:w-96 mt-6">
              <p className="text-md sm:text-xl ">
                I look forward to providing you with exceptional service and
                keeping your appliances in top shape!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
