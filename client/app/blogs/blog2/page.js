import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const Blog1 = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12">
          <div className="secondary-color rounded-3xl pt-3 pb-14 shadow-2xl">
            <p className="text-4xl md:text-5xl text-slate-50 font-bold text-center">
              BLOG
            </p>
          </div>
          <div className="mt-[-40px] flex justify-center">
            <div className="bg-slate-50 p-4 rounded-3xl w-full max-w-lg shadow-xl">
              <p className="text-md md:text-xl text-center roboto-font-nav">
                How to Troubleshoot Common Appliance Issues Before Calling a
                Repair Expert
              </p>
            </div>
          </div>
        </div>

        {/* Image and Introduction */}
        <div className="flex flex-col md:flex-row mt-20">
          <div className="flex-none md:w-1/2 flex justify-center">
            <img
              src="/blog2-img.svg"
              className="w-full h-auto max-w-md"
              alt="Blog 1"
            />
          </div>
          <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <p className="text-2xl blue-text roboto-font-nav">Introduction</p>
            <p className="roboto-font-nav mt-5 text-lg md:text-xl leading-8 text-justify">
              Before reaching out to a repair technician, there are several
              troubleshooting steps you can take to resolve common appliance
              problems. These steps may help you avoid unnecessary service calls
              and save you time and money.
            </p>
          </div>
        </div>

        {/* Washing Machine Section */}
        <div className="mt-20 flex flex-col justify-center">
          <p className="text-2xl font-bold roboto-font-nav text-center">
            Washing Machines
          </p>
          <p className="font-bold text-lg md:text-xl roboto-font-nav leading-8 mt-5 md:mt-10">
            Issue: Washine machine won't start.
          </p>
        </div>

        {/* Troubleshooting Steps for Washing Machine */}
        <div className="mt-5 flex flex-col md:mt-10">
          <p className="text-lg  roboto-font-nav">Troubleshooting Steps:</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg ms-8 text-justify"
          >
            <li>
              Power Supply: Ensure the machine is plugged in and the outlet is
              working. Test the outlet with another device to confirm.
            </li>
            <li>
              Door Lock: Check if the door is properly closed. Many machines
              have safety features that prevent operation if the door isn’t
              securely locked.
            </li>
            <li>
              Water Supply: Make sure the water valves are turned on and the
              hoses are properly connected. Inspect hoses for kinks or
              blockages.
            </li>
            <li>
              Circuit Breaker: Check the circuit breaker or fuse box for tripped
              breakers or blown fuses.
            </li>
          </ul>
        </div>

        {/* Dishwashers Section */}
        <div className="mt-20 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold roboto-font-nav md:mb-5">
            Dishwashers
          </p>
          <p className="text-lg md:text-lg roboto-font-nav">
            Issue: Dishwasher isn't cleaning dishes properly.
          </p>
        </div>

        {/* Troubleshooting Steps for Dishwashers */}
        <div className="mt-2 flex flex-col">
          <p className="text-lg roboto-font-nav">Troubleshooting Steps:</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg ms-8 text-justify"
          >
            <li>
              <span className="font-bold">Step 1: </span> Inspect the spray arms
              for clogs or debris. Remove and clean them if necessary to ensure
              proper water distribution.
            </li>
            <li>
              <span className="font-bold">Step 2:</span> Check and clean the
              filter located at the bottom of the dishwasher to remove food
              particles and prevent clogging.
            </li>
            <li>
              <span className="font-bold">Step 3:</span> Use the correct amount
              of detergent and check that it’s fresh. Old or incorrect detergent
              can affect cleaning performance.
            </li>
            <li>
              <span className="font-bold">Step 4:</span> Verify that the water
              temperature is at least 120°F (49°C) for effective cleaning.
            </li>
          </ul>
        </div>

        {/* Ovens Section */}
        <div className="mt-20 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold roboto-font-nav">
            Ovens:
          </p>
          <p className="text-lg roboto-font-nav mt-3">
            Although Victoria doesn’t experience extreme temperatures, regular
            use of ovens and stoves can lead to residue build-up and performance
            issues
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg  roboto-font-nav mt-5 ms-3">
            Troubleshooting Steps
          </p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg ms-8 text-justify"
          >
            <li>
              <span className="font-bold">Step 1: </span> Ensure the oven is
              plugged in and check the power supply. Inspect the power cord for
              any visible damage.
            </li>
            <li>
              <span className="font-bold">Step 2:</span> Confirm that the oven
              is set to the correct temperature and mode (bake, broil, etc.)
            </li>
            <li>
              <span className="font-bold">Step 3:</span> Inspect the heating
              element for any visible damage or burn marks. If the element
              appears broken, it may need replacement.
            </li>
            <li>
              <span className="font-bold">Step 4:</span> Test the oven
              thermostat for proper functionality. If it’s faulty, it may
              require calibration or replacement.
            </li>
          </ul>
        </div>

        {/* General Safety Tips */}
        <div className="mt-20 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold roboto-font-nav ms-8 ">
            General Safety Tips
          </p>
        </div>

        <ul
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
          className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg ms-8 text-justify"
        >
          <li>
            <span className="font-bold">Power Off: </span> Always disconnect
            appliances from the power source before performing any
            troubleshooting steps to avoid electrical hazards.
          </li>
          <li>
            <span className="font-bold">Consult Manuals:</span> Refer to the
            user manual for appliance-specific troubleshooting tips and error
            codes.
          </li>
        </ul>

        {/* Conclusion */}
        <div className="my-10">
          <p className="text-xl font-bold roboto-font-nav ms-8 ">Conclusion:</p>
          <p className="roboto-font-nav text-base md:text-lg ms-8 text-justify">
            Effective troubleshooting can resolve minor issues and save you from
            unnecessary repairs. If the problem persists despite your efforts,
            our professional repair services are available to help.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog1;
