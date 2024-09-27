import Navbar from "@/app/components/Navbar";
import React from "react";

const Blog1 = () => {
  return (
    <>
      <Navbar />
      <div className="lg:p-10">
        <div className="mt-5">
          <div className="secondary-color rounded-3xl pt-3 pb-14 shadow-2xl ">
            <p className="text-5xl text-slate-50 font-bold text-center">BLOG</p>
          </div>
          <div className="mt-[-40px] flex justify-center">
            <div className="bg-slate-50 p-4 rounded-3xl  w-[594px] shadow-xl">
              <p className="text-xl text-center roboto-font-nav">
                The Ultimate Guide to Maintaining Your Home Appliances in
                Victoria's Unique Climate
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="flex-none w-1/2 flex justify-center">
            <img src="/blog1-img.svg"></img>
          </div>
          <div className="flex-1">
            <p className="text-2xl blue-text roboto-font-nav">Introduction</p>
            <p className="roboto-font-nav w-[471px] mt-5 text-xl leading-8">
              Victoria’s climate, with its mild temperatures and high humidity,
              presents unique challenges for appliance maintenance. Proper care
              tailored to these conditions can extend the life of your
              appliances and ensure their optimal performance.
            </p>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-center">
          <p className="text-2xl font-bold roboto-font-nav text-center">
            Refrigerators and Freezers
          </p>
          <p className="text-xl roboto-font-nav leading-8 mt-5 ">
            Victoria’s high humidity can cause excess moisture, leading to
            potential mold growth and efficiency issues. Regularly check the
            door seals for cracks and clean them with a mild soap solution to
            prevent mold and maintain a tight seal.
          </p>
        </div>
        <div className="mt-10">
          <p className="Maintenance Tips:"></p>
          <ul>
            <li>
              Clean the coils at least every 6-12 months to prevent dust and
              debris build-up. Use a vacuum cleaner with a brush attachment or a
              coil cleaning brush.
            </li>
            <li>
              Check and clean the drain pan located underneath the refrigerator
              every few months to prevent standing water and mold growth.
            </li>
            <li>
              Ensure your fridge is set between 37°F (3°C) and 40°F (4°C) and
              your freezer at 0°F (-18°C) for optimal performance.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Blog1;
