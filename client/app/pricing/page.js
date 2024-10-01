"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleButtonClick = (plan) => {
    setSelectedPlan(plan); // Set the selected plan
    setIsFormOpen(true); // Open the form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define a message based on the selected plan
    const planMessages = {
      "Basic Repair":
        "Thank you for choosing our Basic Repair plan. We will provide a clear estimate before any work begins, ensuring transparency and trust.",
      "Diagnostic Fee":
        "Thank you for selecting our Diagnostic Fee plan. This fee covers a comprehensive assessment to ensure your appliance receives a thorough inspection.",
      "Preventive Maintenance":
        "Thank you for your interest in our Preventive Maintenance package. This plan is designed to help prevent unexpected breakdowns and extend the life of your appliance.",
    };

    // Prepare the message for the user
    const userMessage =
      planMessages[selectedPlan] ||
      "Thank you for your interest! We appreciate your inquiry and will respond shortly.";

    // Send email logic here
    const emailData = {
      to: userEmail,
      subject: `Your Plan Request: ${selectedPlan}`,
      text: userMessage,
    };

    // Send email to the user
    await fetch("/api/selectedPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    // Optionally send a notification to the company
    const companyEmailData = {
      to: userEmail,
      subject: "New Plan Request",
      text: `A new user has requested the ${selectedPlan} plan.\n\nPlease follow up with them at your earliest convenience.`,
    };

    await fetch("/api/planReceived", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companyEmailData),
    });

    // Close the form and reset the email input
    setIsFormOpen(false);
    setUserEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen roboto-font-nav">
      <Navbar />
      <main className="flex-grow">
        <div className="h-auto py-8 roboto-font-nav mb-10">
          <div className="container mx-auto ">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
                <span className="red-text">REPAIR </span>
                <span className="blue-text">PRICING</span>
              </h2>
              <p className="text-md md:text-lg text-black mb-2">
                No Fix, No Fee Policy: If we determine your appliance cannot be
                fixed, you’ll only pay the
              </p>
              <p className="text-md md:text-lg text-black">
                diagnostic fee—{" "}
                <span className=" font-bold">no additional charges.</span>
              </p>
            </div>
          </div>

          <div className="h-auto mx-auto md:mx-8 pb-2 roboto-font-nav bg-[#FA1111] md:bg-[url('/Intersect.png')] md:bg-transparent bg-cover bg-center mt-3">
            <div className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden">
              <div className="flex flex-col md:flex-row w-full max-w-7xl">
                {/* Left Box */}
                <div className="flex-1 bg-white p-6 shadow-xl mt-2 h-auto md:h-[80rem] lg:h-[55rem] xl:h-[45rem] md:mt-36 text-center border-2 max-w-xs md:max-w-md mx-auto order-1 md:order-1">
                  <h3 className="text-xl md:text-2xl mb-4 font-bold">
                    Repair starts @
                  </h3>
                  <div className="flex justify-center items-start mb-5">
                    <div className="flex justify-center items-center">
                      <span className="text-4xl md:text-3xl lg:text-3xl blue-text">
                        $
                      </span>
                      <span className="text-6xl md:text-5xl lg:text-6xl font-bold blue-text">
                        129
                      </span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg mb-5 font-semibold">
                    for basic issues
                  </p>
                  <p className="text-base md:text-lg mb-5">
                    We provide a clear estimate before any work is done.
                  </p>
                  <p className="text-base md:text-lg mb-5 text-gray-400 font-normal">
                    Diagnostic Fee $79
                  </p>
                  <p className="text-base md:text-lg mb-5 text-gray-400 font-normal">
                    (waived if the repair is completed).
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleButtonClick("Basic Repair")}
                      className="submit-button font-bold my-5 md:my-44 custom-box-shadow hover:scale-105 text-lg sm:text-xl md:text-2xl p-2"
                    >
                      GET THIS OFFER
                    </button>
                  </div>
                </div>

                {/* Middle Box (Larger) */}
                <div className="flex-1 secondary-color text-white p-20 shadow-2xl h-auto md:h-[90rem] lg:h-[70rem] xl:h-[57rem] mt-2 text-center max-w-md mx-auto order-3 md:order-2">
                  <h3 className="text-xl md:text-2xl md:mt-[-2rem] font-bold">
                    Diagnostic Fee
                  </h3>
                  <h3 className="text-xl md:text-2xl mb-4 font-bold">
                    Starts @
                  </h3>
                  <div className="flex justify-center items-start mb-2">
                    <div className="flex justify-center items-center">
                      <span className="text-4xl md:text-3xl lg:text-3xl">
                        $
                      </span>
                      <span className="text-6xl md:text-5xl lg:text-6xl font-bold">
                        79
                      </span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg mb-5">PROMO</p>
                  <p className="text-base md:text-lg mb-5">
                    The diagnostic fee is a flat rate, covering travel and a
                    full assessment. Once the diagnosis is complete, this fee is
                    applied toward the total repair cost, based on the
                    complexity of the job. This fee ensures a thorough
                    inspection and helps cover travel and technician time.
                  </p>
                  <p className="text-base md:text-lg text-gray-400 font-normal mb-5">
                    Please Note
                  </p>
                  <p className="text-base md:text-lg mb-5 text-gray-400 font-normal">
                    The diagnostic fee is non-refundable and due at the time of
                    your appointment. It is applied toward the total repair,
                    making it a smart investment in your appliance’s health.
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleButtonClick("Diagnostic Fee")}
                      className="primary-button font-bold custom-box-shadow my-4 hover:scale-105 text-lg sm:text-xl md:text-2xl p-2 outline-none"
                    >
                      GET THIS OFFER
                    </button>
                  </div>
                </div>

                {/* Right Box */}
                <div className="flex-1 bg-white p-6 shadow-xl h-auto md:h-[80rem] lg:h-[55rem] xl:h-[45rem] mt-2 md:mt-36 text-center border-2 max-w-sm md:max-w-md mx-auto order-2 md:order-3 ">
                  <h3 className="text-xl md:text-2xl mb-4 font-bold">
                    Repair starts @
                  </h3>
                  <div className="flex justify-center items-start mb-5">
                    <div className="flex justify-center items-center">
                      <span className="text-4xl md:text-3xl lg:text-3xl blue-text">
                        $
                      </span>
                      <span className="text-6xl md:text-5xl lg:text-6xl font-bold blue-text">
                        179
                      </span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg font-semibold">
                    preventive maintenance package
                  </p>
                  <p className="text-base md:text-lg mb-5">Package Includes:</p>

                  <ul className="list-disc text-left ml-5 mb-5">
                    <li>
                      Comprehensive inspection and cleaning of essential
                      components
                    </li>
                    <li>Lubrication of moving parts</li>
                    <li>Performance check and adjustment</li>
                    <li>Wear-and-tear assessment</li>
                    <li>Detailed report on appliance condition</li>
                  </ul>

                  <p className="text-base md:text-lg mb-5">Benefits:</p>

                  <ul className="list-none text-left ml-5 mb-5">
                    <li>- Prevent unexpected breakdowns</li>
                    <li>- Extend the lifespan of your appliances</li>
                    <li>- Enhance efficiency and performance</li>
                  </ul>
                  <div className="flex justify-center">
                    <button
                      onClick={() =>
                        handleButtonClick("Preventive Maintenance")
                      }
                      className="submit-button font-bold my-5 custom-box-shadow hover:scale-105 text-lg sm:text-xl md:text-xl p-2"
                    >
                      GET THIS OFFER
                    </button>
                  </div>
                  <p className="text-gray-400 font-normal">
                    Note: This package excludes any necessary replacement parts.
                    Our technician will inform you of additional costs if
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center hidden md:block">
            Invest in our maintenance package to keep your appliances running
            smoothly and avoid costly repairs!
          </p>

          <div className="max-w-7xl mx-10 md:mx-10 lg:mx-auto  ">
            <p className="my-10 text-sm sm:text-base md:text-lg">
              Our diagnostic fee is a simple, upfront charge that covers both
              travel and a comprehensive assessment of your appliance. The best
              part? Once we identify the issue, the fee goes directly toward
              your repair cost. This way, you're guaranteed a thorough
              inspection from our expert technician, with &nbsp;
              <span className="red-text">
                no hidden fees—just reliable service and peace of mind from
                start to finish.
              </span>
            </p>
            <div className="text-center">
              <p className="my-5 text-sm sm:text-base md:text-lg">
                Please Note: The diagnostic fee is non-refundable and due at the
                time of your appointment. It is applied toward the total repair,
                making it a smart investment in your appliance’s health.
              </p>
            </div>
          </div>
          {/* Payment Options Section */}
          <div className=" max-w-7xl mx-10 md:mx-10 lg:mx-auto ">
            <div className="flex flex-col md:flex-row mt-8 md:mx-10">
              {/* Combined Box */}
              <div className="flex flex-1 flex-col md:flex-row bg-gray-200 rounded-3xl shadow-md overflow-hidden border border-gray-300">
                {/* Left Box - Payment Option */}
                <div className="secondary-color text-white p-6 rounded-none md:rounded-l-3xl w-full md:w-1/2">
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                      PAYMENT OPTION
                    </h2>
                    <p className="my-5 text-sm sm:text-base md:text-lg">
                      We offer flexible payment options for your convenience:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:text-center">
                    <div className="flex flex-col items-center">
                      <img
                        src="debit.png"
                        alt="Payment Method 1"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2"
                      />
                      <span className="text-center font-semibold">
                        {" "}
                        Credit/Debit Cards
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="cash.png"
                        alt="Payment Method 2"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2"
                      />
                      <span className="text-center font-semibold">Cash</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="ewallet.png"
                        alt="Payment Method 3"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2"
                      />
                      <span className="text-center font-semibold">
                        Online Transfers <br /> (Interac)
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="my-10 font-normal">
                      Payment Policy: The diagnostic fee is due at the time of
                      your appointment. The remaining balance for repairs will
                      be invoiced once the work is completed. We aim to make
                      payments easy and straightforward, with no hidden charges
                      or surprise fees.
                    </p>
                  </div>
                </div>

                {/* Right Box - How Would You Like to Pay */}
                <div className="bg-amber-50 border-black border-2 p-6 rounded-none md:rounded-r-3xl w-full md:w-1/2">
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
                      HOW &nbsp;
                      <span className="blue-text">WOULD YOU</span> <br />
                      <span className="red-text"> LIKE TO PAY?</span>
                    </h2>
                    <p className="my-5 text-sm sm:text-base md:text-2xl italic">
                      We Accept:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <img
                        src="/weAccept/visa.jpg"
                        alt="Payment Method 1"
                        className="w-12 sm:w-16 md:w-36 h-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/weAccept/mastercard.png"
                        alt="Payment Method 2"
                        className="w-12 sm:w-16 md:w-36 h-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/weAccept/dinersclub.png"
                        alt="Payment Method 3"
                        className="w-12 sm:w-16 md:w-36 h-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/weAccept/discover.jpg"
                        alt="Payment Method 4"
                        className="w-12 sm:w-16 md:w-36 h-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/weAccept/AmEx.png"
                        alt="Payment Method 5"
                        className="w-12 sm:w-16 md:w-36 h-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/weAccept/Interac.png"
                        alt="Payment Method 6"
                        className="w-12 sm:w-16 md:w-36 h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isFormOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Enter Your Email</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    className="border rounded p-2 w-full mb-4"
                  />
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="border rounded p-2 bg-gray-300 hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
