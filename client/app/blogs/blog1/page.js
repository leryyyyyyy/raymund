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
                The Ultimate Guide to Maintaining Your Home Appliances in
                Victoria's Unique Climate
              </p>
            </div>
          </div>
        </div>

        {/* Image and Introduction */}
        <div className="flex flex-col md:flex-row mt-20">
          <div className="flex-none md:w-1/2 flex justify-center">
            <img
              src="/blog1-img.svg"
              className="w-full h-auto max-w-md"
              alt="Blog 1"
            />
          </div>
          <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <p className="text-2xl blue-text roboto-font-nav">Introduction</p>
            <p className="roboto-font-nav mt-5 text-lg md:text-xl leading-8 text-justify">
              Victoria’s climate, with its mild temperatures and high humidity,
              presents unique challenges for appliance maintenance. Proper care
              tailored to these conditions can extend the life of your
              appliances and ensure their optimal performance.
            </p>
          </div>
        </div>

        {/* Refrigerator Section */}
        <div className="mt-20 flex flex-col justify-center">
          <p className="text-2xl font-bold roboto-font-nav text-center">
            Refrigerators and Freezers
          </p>
          <p className="text-lg md:text-xl roboto-font-nav leading-8 mt-5 px-8 text-justify">
            Victoria’s high humidity can cause excess moisture, leading to
            potential mold growth and efficiency issues. Regularly check the
            door seals for cracks and clean them with a mild soap solution to
            prevent mold and maintain a tight seal.
          </p>
        </div>

        {/* Maintenance Tips for Refrigerator */}
        <div className="mt-5 flex flex-col">
          <p className="text-lg font-bold roboto-font-nav mb-3">
            Maintenance Tips:
          </p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "32px" }}
            className="space-y-10 roboto-font-nav mt-5 text-base md:text-lg text-justify"
          >
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

        {/* Washing Machine Section */}
        <div className="mt-10 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold roboto-font-nav">
            Washing Machines and Dryers
          </p>
          <p className="text-lg md:text-lg px-8 roboto-font-nav leading-8 mt-5 text-justify">
            While Victoria’s mild temperatures reduce the risk of freezing, high
            humidity can contribute to mold and mildew growth in washing
            machines.
          </p>
        </div>

        {/* Maintenance Tips for Washing Machines */}
        <div className="mt-5 flex flex-col">
          <p className="text-lg font-bold roboto-font-nav">Maintenance Tips:</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "32px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg text-justify"
          >
            <li>
              <span className="font-bold">Washing Machine-</span> Clean the
              detergent drawer and drum regularly. Run a cleaning cycle with a
              washing machine cleaner or a mixture of white vinegar and baking
              soda. Leave the door open between uses to allow the interior to
              dry completely.
            </li>
            <li>
              <span className="font-bold">Dryer Vents-</span> Check and clean
              the dryer vent and lint trap after every load to prevent clogs and
              ensure proper airflow. Periodically, inspect the venting duct to
              ensure it’s free from lint and debris.
            </li>
          </ul>
        </div>

        {/* Ovens and Stoves Section */}
        <div className="mt-20 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold roboto-font-nav">
            Ovens and Stoves
          </p>
          <p className="text-lg md:text-lg ms-8 roboto-font-nav leading-8 mt-5 text-justify">
            Although Victoria doesn’t experience extreme temperatures, regular
            use of ovens and stoves can lead to residue build-up and performance
            issues
          </p>
        </div>
        <p className="text-lg font-bold roboto-font-nav mt-5 ms-8">
          Maintenance Tips:
        </p>

        {/* Maintenance Tips for Ovens and Stoves */}
        <div className="mt-5 flex flex-col md:flex-row">
          <div className="flex-none md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/blog1-img2.svg"
              className="w-full h-auto max-w-md"
              alt="Blog 1 Image 2"
            />
          </div>
          <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg text-justify"
            >
              <li>
                <span className="font-bold">Oven Cleaning-</span> Clean the oven
                interior and racks regularly to prevent grease build-up. Use an
                oven cleaner or a baking soda paste for stubborn stains. For
                self-cleaning ovens, follow the manufacturer's instructions for
                safe usage.
              </li>
              <li>
                <span className="font-bold">Stove Burners- </span>
                Regularly clean the burner grates and drip pans to prevent food
                residue build-up. Check the burners for proper ignition and
                flame patterns.
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="my-10">
          <p className="text-xl font-bold roboto-font-nav">Conclusion:</p>
          <p className="roboto-font-nav text-base md:text-lg text-justify">
            Adapting your appliance maintenance to Victoria’s climate can
            enhance their longevity and performance. For a thorough check-up or
            if you encounter any issues, don’t hesitate to schedule a
            professional inspection.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog1;
