"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
  return (
    <div className="flex flex-col min-h-screen roboto-font-nav">
      <Navbar />
      <main className="flex-grow">
        <div className="h-auto py-8 roboto-font-nav">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-black">
                <span className="red-text">REPAIR </span>
                <span className="blue-text">PRICING</span>
              </h2>
              <p className="text-sm md:text-base text-black">
                No Fix, No Fee Policy: If we determine your appliance cannot be
                fixed, you’ll only pay the
              </p>
              <p className="text-sm md:text-base text-black">
                diagnostic fee—no additional charges.
              </p>
            </div>

            {/* Floating row of three boxes */}
            <div className="relative mb-8">
              <div className="flex justify-center">
                <div className="bg-blue-500 h-72 w-64 text-white text-center flex items-center justify-center">
                  Box 1
                </div>
                <div className="bg-green-500 h-96 w-56 text-white text-center flex items-center justify-center -mt-12 mb-12">
                  Box 2 (Slimmer)
                </div>
                <div className="bg-blue-500 h-72 w-64 text-white text-center flex items-center justify-center">
                  Box 3
                </div>
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
