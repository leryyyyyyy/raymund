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
                Why Regular Appliance Maintenance Can Save You Money in the Long
                Run
              </p>
            </div>
          </div>
        </div>

        {/* Image and Introduction */}
        <div className="flex flex-col md:flex-row mt-20">
          <div className="flex-none md:w-1/2 flex justify-center">
            <img
              src="/blog3-img.svg"
              className="w-full h-auto max-w-md"
              alt="Blog 1"
            />
          </div>
          <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <p className="text-2xl blue-text roboto-font-nav">Introduction</p>
            <p className="roboto-font-nav mt-5 text-lg md:text-xl leading-8">
              Regular appliance maintenance is more than just a routine
              task—it’s a wise investment that can lead to significant cost
              savings over time. Understanding the benefits can help you see the
              value in maintaining your appliances proactively.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">
            Cost of Preventative Maintenance vs. Emergency Repairs
          </p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Routine Maintenance: Regular inspections and minor repairs can
              prevent major breakdowns, which can be costly. Scheduled
              maintenance helps identify potential issues early, allowing for
              less expensive fixes.
            </li>
            <li>
              Emergency Repairs: Ignoring maintenance can lead to major problems
              requiring expensive repairs or even full replacements. Emergency
              repairs often come with higher costs due to the urgency and
              complexity of the issues.
            </li>
          </ul>
        </div>
        <div className="mt-14 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">
            Efficiency and Energy Savings
          </p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Optimized Performance: Well-maintained appliances operate more
              efficiently, reducing energy consumption. For example, a clean
              refrigerator runs more efficiently, which can lower your
              electricity bill.
            </li>
            <li>
              Case Studies: Provide real-life examples or case studies
              demonstrating how regular maintenance has helped customers avoid
              expensive repairs and reduce energy costs. Highlight instances
              where customers have saved on utility bills due to improved
              appliance performance.
            </li>
          </ul>
        </div>
        <div className="mt-14 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">Enhanced Safety</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Routine maintenance can help identify safety hazards such as gas
              leaks, electrical faults, or worn-out parts. Addressing these
              issues early reduces the risk of accidents and ensures safe
              operation.
            </li>
            <li>
              Regular maintenance provides peace of mind, knowing that your
              appliances are operating safely and efficiently.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="my-10">
          <p className="text-xl font-bold roboto-font-nav">Conclusion:</p>
          <p className="roboto-font-nav text-base md:text-lg">
            Investing in regular maintenance not only helps avoid costly repairs
            but also improves appliance efficiency and safety. Schedule a
            maintenance visit today to ensure your appliances remain in
            excellent condition and enjoy long-term savings.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog1;
