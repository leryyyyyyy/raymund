import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row mt-10 mx-5 space-y-8 md:space-y-0">
          <div className="md:flex-none md:w-1/2 flex flex-col justify-center items-center space-y-4">
            <p className="text-5xl md:text-7xl lg:text-9xl blue-text font-bold">
              BLOG<span className="red-text">s</span>
            </p>
            <p className="text-lg md:text-xl font-medium w-full text-center md:text-left">
              We<span className="red-text"> love sharing tips, advice,</span>{" "}
              and helpful information on how to
              <span className="blue-text"> care for your appliances.</span>
            </p>
          </div>
          <div className="md:flex-1 flex justify-center">
            <img
              src="/blogs-hero-img.svg"
              alt="Blogs Hero"
              className="w-full h-auto max-w-md md:max-w-full"
            />
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 my-10">
          {/* Blog 1 */}
          <div className="flex justify-center">
            <Link href="/blogs/blog1">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105 transform transition-transform">
                <img src="/blogs-4.1.svg" alt="Blog 1" />
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-3 mt-3">
                  <p className="text-sm text-slate-50 text-center roboto-font-nav">
                    The Ultimate Guide to Maintaining Your Home Appliances in
                    Victoria's Unique Climate
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog 2 */}
          <div className="flex justify-center">
            <Link href="/blogs/blog2">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105 transform transition-transform">
                <img src="/blogs-4.2.svg" alt="Blog 2" />
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-3 mt-3">
                  <p className="text-sm text-slate-50 text-center roboto-font-nav">
                    How to Troubleshoot Common Appliance Issues Before Calling a
                    Repair Expert
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog 3 */}
          <div className="flex justify-center">
            <Link href="/blogs/blog3">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105 transform transition-transform">
                <img src="/blogs-4.3.svg" alt="Blog 3" />
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-3 mt-3">
                  <p className="text-sm text-slate-50 text-center roboto-font-nav">
                    Why Regular Appliance Maintenance Can Save You Money in the
                    Long Run
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog 4 */}
          <div className="flex justify-center">
            <Link href="/blogs/blog4">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105 transform transition-transform">
                <img src="/blogs-4.4.svg" alt="Blog 4" />
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-6 mt-3">
                  <p className="text-sm text-slate-50 text-center roboto-font-nav">
                    Top 5 Signs Your Appliance Needs Professional Repair
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
