import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex mt-10 mx-5">
          <div className="flex-none w-1/2 flex flex-col justify-center items-center space-y-4">
            <p className="text-9xl blue-text font-bold">
              BLOG<span className="red-text">s</span>
            </p>
            <p className="text-xl font-medium w-[484px]">
              We<span className="red-text"> love sharing tips, advice,</span>and
              helpful information on how to
              <span className="blue-text"> care for your appliances.</span>
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/blogs-hero-img.svg"></img>
          </div>
        </div>
        <div className="flex p-10 my-10">
          <div className="flex-none w-1/4 flex justify-center">
            <Link href="/blogs/blog1">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105">
                <img src="/blogs-4.1.svg"></img>
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-3 mt-3">
                  <p className="text-sm text-slate-50 text-center roboto-font-nav">
                    The Ultimate Guide to Maintaining Your Home Appliances in
                    Victoria's Unique Climate
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-none w-1/4 flex justify-center">
            <Link href="/blogs/blog2">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105">
                <img src="/blogs-4.2.svg"></img>
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-3 mt-3">
                  <p className="text-sm text-slate-50 text-center roboto-font-nav">
                    How to Troubleshoot Common Appliance Issues Before Calling a
                    Repair Expert
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-none w-1/4 flex justify-center">
            <Link href="/blogs/blog3">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105">
                <img src="/blogs-4.3.svg"></img>
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-3 mt-3">
                  <p className="text-sm text-slate-50 text-center roboto-font-nav">
                    Why Regular Appliance Maintenance Can Save You Money in the
                    Long Run
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-none w-1/4 flex justify-center">
            <Link href="/blogs/blog4">
              <div className="w-[231px] h-auto bg-custom-gradient rounded-tl-3xl rounded-br-3xl p-5 shadow-2xl shadow-slate-800 hover:scale-105">
                <img src="/blogs-4.4.svg"></img>
                <div className="secondary-color-darker rounded-tl-3xl rounded-br-3xl p-3 mt-3">
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
