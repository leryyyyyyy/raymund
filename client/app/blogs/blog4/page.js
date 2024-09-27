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
                Top 5 Signs Your Appliance Needs Professional Repair
              </p>
            </div>
          </div>
        </div>

        {/* Image and Introduction */}
        <div className="flex flex-col md:flex-row mt-20">
          <div className="flex-none md:w-1/2 flex justify-center">
            <img
              src="/blog4-img.svg"
              className="w-full h-auto max-w-md"
              alt="Blog 1"
            />
          </div>
          <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <p className="text-2xl blue-text roboto-font-nav">Introduction</p>
            <p className="roboto-font-nav mt-5 text-lg md:text-xl leading-8">
              Identifying when an appliance needs professional repair can
              prevent minor issues from escalating into major problems. Here are
              five key signs that indicate it’s time to call a repair expert.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">Unusual Noises</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Description: Unusual noises such as grinding, squealing, or
              banging can indicate mechanical issues or worn-out parts within
              the appliance. These noises often signal that internal components
              are malfunctioning or failing.
            </li>
            <li>
              Action: If you hear persistent or new noises, it’s crucial to have
              a professional inspect the appliance. Ignoring these sounds can
              lead to further damage and more costly repairs.
            </li>
          </ul>
        </div>
        <div className="mt-14 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">
            Inconsistent Performance
          </p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Description: Appliances that don’t perform as expected, such as a
              refrigerator not cooling properly or a dryer not drying clothes
              effectively, may have underlying issues affecting their
              performance.
            </li>
            <li>
              Action: If an appliance is not functioning consistently, schedule
              a service call to diagnose and address the problem. Inconsistent
              performance often requires professional attention to identify and
              fix the root cause.
            </li>
          </ul>
        </div>
        <div className="mt-14 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">Visual Damage</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Description: Visible damage such as cracks, leaks, or electrical
              burns can affect the appliance’s functionality and safety. Such
              damage may result from wear and tear or accidents.
            </li>
            <li>
              Action: Addressing visible damage promptly can prevent further
              complications. Contact a technician to assess and repair the
              damage to ensure safe operation.
            </li>
          </ul>
        </div>
        <div className="mt-14 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">Electrical Issues</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Description: Appliances that frequently trip the circuit breaker,
              have faulty wiring, or show signs of electrical malfunction can
              pose safety risks. Electrical issues can also affect appliance
              performance.
            </li>
            <li>
              Action: If you experience electrical issues, such as frequent
              power interruptions or sparks, consult a professional to inspect
              and repair the appliance. Electrical problems should be handled by
              experts to prevent hazards.
            </li>
          </ul>
        </div>
        <div className="mt-14 flex flex-col justify-center">
          <p className="text-xl font-bold roboto-font-nav">
            Error Codes or Alerts
          </p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-4 roboto-font-nav mt-5 text-base md:text-lg"
          >
            <li>
              Description: Many modern appliances feature digital displays that
              show error codes or alerts when there’s a problem. These codes can
              indicate specific issues or malfunctions.
            </li>
            <li>
              Action: Refer to the user manual for explanations of error codes
              and follow recommended troubleshooting steps. If the problem
              persists, contact a technician for a detailed diagnosis and
              repair.
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
