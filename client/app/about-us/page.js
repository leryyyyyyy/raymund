import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="flex h-[75vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <div className="relative top-32 left-36">
            <p className="red-text font-extrabold text-7xl">WELCOME TO</p>
            <p className="text-5xl text-shadow mt-4">RAYMUND BLONDES</p>
            <p className="roboto-font-nav font-bold text-6xl blue-text mt-4">
              APPLIANCE REPAIR!
            </p>
            <button className="primary-button font-bold custom-box-shadow mt-10 hover:scale-105 text-2xl">
              GET A FREE QUOTE
            </button>
          </div>
          <img
            src="/about-hero-img.svg"
            aria-label="Background image showing appliance repair services"
            className="h-[90vh] w-auto absolute right-0"
          ></img>
        </section>

        {/* Section 2 */}
        <div className="tertiary-color flex">
          <div className="flex-1 p-8">
            <img src="/about-2-img.svg" className="pt-5"></img>
          </div>
          <div className="flex-1">
            <div className="mt-5">
              <p className="text-2xl font-bold font-inter text-white text-outline-blue">
                WHY CHOOSE RAYMUND BLONDES APPLIANCE REPAIR ?
              </p>
              <div className="flex mt-6">
                <div className="flex-none w-14">
                  <img src="/Check Mark.svg" className="mt-1"></img>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold font-inter text-white mt-4">
                    Transparent Pricing
                  </p>
                  <p className="text-base font-inter text-white">
                    No hidden fees; everything is upfront.
                  </p>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex-none w-14">
                  <img src="/Check Mark.svg" className="mt-1"></img>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold font-inter text-white mt-3">
                    No Fix, No Fee
                  </p>
                  <p className="text-base font-inter text-white">
                    If we can't repair your appliance, you only pay the
                    diagnostic fee.
                  </p>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex-none w-14">
                  <img src="/Check Mark.svg" className="mt-1"></img>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold font-inter text-white mt-3">
                    Customer-Centric
                  </p>
                  <p className="text-base font-inter text-white">
                    We focus on ensuring you get excellent service from start to
                    finish.
                  </p>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex-none w-14">
                  <img src="/Check Mark.svg" className="mt-1"></img>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold font-inter text-white mt-3">
                     Same-Day or Next-Day Service
                  </p>
                  <p className="text-base font-inter text-white">
                    We strive to address your repair needs as quickly as
                    possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex p-14">
          <div className="flex-none w-2/3">
            <p className="text-4xl font-bold">
              Welcome to Raymund Blones Appliance Repair!
            </p>
            <p className="text-xl leading-10 mt-5 text-indent text-justify">
              I’m Raymund, and I’m thrilled to be your go-to expert for all your
              appliance repair needs. Based in beautiful Victoria, BC, my
              mission is to provide you with honest ,reliable, and top-notch
              appliance repair services right when you need them.
            </p>
            <p className="text-xl leading-10 mt-5 text-indent text-justify">
              With extensive experience in appliance repair, I bring a wealth of
              expertise to every job. My journey started with a passion for
              fixing things, leading me to become a seasoned technician. Each
              location has enriched my skills and broadened my knowledge,
              allowing me to tackle a diverse range of appliance issues with
              confidence and precision.
            </p>
          </div>
          <div className="flex-1 mt-5">
            <img src="/about-3-img.svg"></img>
          </div>
        </div>

        {/* Section 4 */}
        <div
          className="bg-cover bg-center bg-no-repeat h-[75vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] px-8"
          style={{
            backgroundImage: "url('/about-4-img.svg')",
          }}
          aria-label="Background image showing appliance repair services"
        >
          <div className="text-center p-10">
            <p className="text-4xl text-white font-bold">
              Extensive Experience
            </p>
            <p className="mt-2 text-2xl italic text-white">
              in appliance repair accross
            </p>
          </div>
          <div className="flex">
            <div className="flex-none w-1/4">
              <div className="flex flex-col justify-center">
                <img
                  src="/about-4-manila.svg"
                  className="h-[246px] w-auto"
                ></img>
                <p className="text-3xl text-white font-bold text-center">
                  Manila
                </p>
              </div>
            </div>
            <div className="flex-none w-1/4">
              <div className="flex flex-col justify-center">
                <img
                  src="/about-4-kuwait.svg"
                  className="h-[246px] w-auto"
                ></img>
                <p className="text-3xl text-white font-bold text-center">
                  Kuwait
                </p>
              </div>
            </div>
            <div className="flex-none w-1/4">
              <div className="flex flex-col justify-center">
                <img
                  src="/about-4-dubai.svg"
                  className="h-[246px] w-auto"
                ></img>
                <p className="text-3xl text-white font-bold text-center">
                  Dubai
                </p>
              </div>
            </div>
            <div className="flex-none w-1/4">
              <div className="flex flex-col justify-center">
                <img
                  src="/about-4-canada.svg"
                  className="h-[246px] w-auto"
                ></img>
                <p className="text-3xl text-white font-bold text-center">
                  Canada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="py-9 px-11">
          <p className="text-5xl font-bold text-center">
            Top <span className="blue-text">Features</span> what sets
          </p>
          <p className="text-5xl font-bold text-center mt-4">
            <span className="red-text">US</span> Apart
          </p>
          <div className="flex mt-12 space-x-12 justify-center">
            <div className="flex flex-col flex-none bg-[#5989CA] rounded-[50px] w-80 justify-center p-8 custom-box-shadow2">
              <img src="/Family.svg" className="h-[154px]"></img>
              <p className="text-lg text-white text-center">
                Our dedication to making your life easier. I treat every
                customer like family.
              </p>
            </div>
            <div className="flex flex-col flex-none bg-[#5989CA] rounded-[50px] w-80 justify-center p-8 custom-box-shadow2">
              <img src="/shop-tag.png" className="w-[150px] ms-10"></img>
              <p className="text-lg text-white text-center">
                 Offer transparent pricing with no hidden fees, and deliver
                service with a smile.
              </p>
            </div>
            <div className="flex flex-col flex-none bg-[#5989CA] rounded-[50px] w-80 justify-center p-8 custom-box-shadow2">
              <img src="/buddies.png" className="w-[130px] ms-14"></img>
              <p className="text-lg text-white text-center">
                To ensure that when you call us, you can relax knowing that your
                appliances are in good hands.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="primary-button font-bold custom-box-shadow mt-10 hover:scale-105 text-2xl">
              GET A FREE QUOTE
            </button>
          </div>
          <div className="text-center mt-8 roboto-font-nav flex flex-col items-center">
            <p className="text-3xl font-bold">
              Thank you for considering{" "}
              <span className="blue-text">Raymund</span>{" "}
              <span className="red-text">Blondes</span> Appliance Repair.
            </p>
            <div className="w-96 mt-4">
              <p className="text-xl font-semibold">
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
