import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
  return (
    <div className="flex flex-col min-h-screen roboto-font-nav">
      <Navbar />
      <main></main>
      <Footer />
    </div>
  );
}

export default Page;
